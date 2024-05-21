export const createFullRecordingsTable = `
CREATE TABLE IF NOT EXISTS full_recordings (
  id SERIAL PRIMARY KEY,
  data BYTEA NOT NULL,
  name TEXT,
  transcription TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`;
