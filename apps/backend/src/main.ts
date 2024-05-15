import express from 'express';
import busboy from 'busboy';
import pool from './lib/db';
import { createAudioChunksTable, createFullRecordingsTable } from './lib/queries';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

// Create tables if they don't exist
pool.query(createAudioChunksTable)
  .then(() => console.log('Audio chunks table created'))
  .catch((err) => console.error('Error creating audio chunks table:', err));

pool.query(createFullRecordingsTable)
  .then(() => console.log('Full recordings table created'))
  .catch((err) => console.error('Error creating full recordings table:', err));

app.use(express.json());

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.post('/api/audio-chunk', (req, res) => {
  const bb = busboy({ headers: req.headers });
  bb.on('file', (name, file) => {
    const chunks = [];
    file.on('data', (data) => {
      chunks.push(data);
    });
    file.on('end', async () => {
      const buffer = Buffer.concat(chunks);
      try {
        const result = await pool.query('INSERT INTO audio_chunks (data) VALUES ($1) RETURNING *', [buffer]);
        res.status(200).json(result.rows[0]);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
  });
  req.pipe(bb);
});

app.post('/api/full-recording', (req, res) => {
  const bb = busboy({ headers: req.headers });
  let name = new Date().toLocaleString(); // Default name is current date and time in a readable format
  bb.on('field', (fieldname, val) => {
    if (fieldname === 'name') {
      name = val; // Override default name if provided
    }
  });
  bb.on('file', (fieldname, file) => {
    const chunks = [];
    file.on('data', (data) => {
      chunks.push(data);
    });
    file.on('end', async () => {
      const buffer = Buffer.concat(chunks);
      try {
        const result = await pool.query('INSERT INTO full_recordings (data, name) VALUES ($1, $2) RETURNING *', [buffer, name]);
        res.status(200).json(result.rows[0]);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
  });
  req.pipe(bb);
});

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
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/recordings/:id', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM full_recordings WHERE id = $1', [req.params.id]);
    const recording = result.rows[0];
    if (recording) {
      res.json({
        id: recording.id,
        url: `data:audio/wav;base64,${recording.data.toString('base64')}`,
        name: recording.name,
        created_at: recording.created_at
      });
    } else {
      res.status(404).send('Recording not found');
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

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
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/recordings/:id', async (req, res) => {
  try {
    const result = await pool.query('DELETE FROM full_recordings WHERE id = $1 RETURNING *', [req.params.id]);
    if (result.rowCount > 0) {
      res.status(200).json({ message: 'Recording deleted successfully' });
    } else {
      res.status(404).json({ error: 'Recording not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
