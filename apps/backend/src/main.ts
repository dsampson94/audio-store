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
    const chunks: Buffer[] = [];
    file.on('data', (data) => {
      chunks.push(data);
    });
    file.on('end', async () => {
      const buffer = Buffer.concat(chunks);
      try {
        const result = await pool.query(
          'INSERT INTO audio_chunks (data) VALUES ($1) RETURNING *',
          [buffer]
        );
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
  bb.on('file', (name, file) => {
    const chunks: Buffer[] = [];
    file.on('data', (data) => {
      chunks.push(data);
    });
    file.on('end', async () => {
      const buffer = Buffer.concat(chunks);
      try {
        const result = await pool.query(
          'INSERT INTO full_recordings (data) VALUES ($1) RETURNING *',
          [buffer]
        );
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
      url: `data:audio/wav;base64,${recording.data.toString('base64')}`
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
        url: `data:audio/wav;base64,${recording.data.toString('base64')}`
      });
    } else {
      res.status(404).send('Recording not found');
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
