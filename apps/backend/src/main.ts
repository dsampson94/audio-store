import express from 'express';
import busboy from 'busboy';
import pool from './lib/db';
import { createFullRecordingsTable } from './lib/queries';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

// Setup database and create tables if they don't exist
const setupDatabase = async () => {
  try {
    await pool.query(createFullRecordingsTable);
    console.log('Full recordings table exists');
  } catch (err) {
    console.error('Error setting up tables:', err);
    process.exit(1);
  }
};

setupDatabase().then(() => {
  app.listen(port, host, () => {
    console.log(`[ ready ] http://${host}:${port}`);
  });
});

app.use(express.json());

// Endpoint to test if the API is working
app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

// Helper function to handle file uploads
const handleFileUpload = (req, res, query, params) => {
  const bb = busboy({ headers: req.headers });
  bb.on('file', (name, file) => {
    const chunks = [];
    file.on('data', (data) => chunks.push(data));
    file.on('end', async () => {
      const buffer = Buffer.concat(chunks);
      try {
        const result = await pool.query(query, params(buffer));
        res.status(200).json(result.rows[0]);
      } catch (error) {
        res.status(500).json({ error: 'Failed to upload file' });
        console.error('Failed to upload file:', error);
      }
    });
  });
  req.pipe(bb);
};

// Endpoint to handle uploading a full recording
app.post('/api/full-recording', (req, res) => {
  let name = new Date().toLocaleString();
  const bb = busboy({ headers: req.headers });
  bb.on('field', (fieldname, val) => {
    if (fieldname === 'name') name = val;
  });
  handleFileUpload(req, res, 'INSERT INTO full_recordings (data, name) VALUES ($1, $2) RETURNING *', buffer => [buffer, name]);
});

// Endpoint to fetch all recordings
app.get('/api/recordings', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM full_recordings ORDER BY created_at DESC');
    const recordings = result.rows.map(recording => ({
      id: recording.id,
      url: `data:audio/wav;base64,${recording.data.toString('base64')}`,
      name: recording.name,
      created_at: recording.created_at
    }));
    res.json(recordings);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch recordings' });
    console.error('Failed to fetch recordings:', error);
  }
});

// Endpoint to update the name of a recording by its ID
app.put('/api/recordings/:id', async (req, res) => {
  const { name } = req.body;
  try {
    const result = await pool.query('UPDATE full_recordings SET name = $1 WHERE id = $2 RETURNING *', [name, req.params.id]);
    if (result.rowCount > 0) {
      res.status(200).json(result.rows[0]);
    } else {
      res.status(404).json({ error: 'Recording not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update recording' });
    console.error('Failed to update recording:', error);
  }
});

// Endpoint to delete a recording by its ID
app.delete('/api/recordings/:id', async (req, res) => {
  try {
    const result = await pool.query('DELETE FROM full_recordings WHERE id = $1 RETURNING *', [req.params.id]);
    if (result.rowCount > 0) {
      res.status(200).json({ message: 'Recording deleted successfully' });
    } else {
      res.status(404).json({ error: 'Recording not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete recording' });
    console.error('Failed to delete recording:', error);
  }
});

