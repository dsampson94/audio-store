export const createAudioChunksTable = `
CREATE TABLE IF NOT EXISTS audio_chunks (
  id SERIAL PRIMARY KEY,
  data BYTEA NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`;

export const createFullRecordingsTable = `
CREATE TABLE IF NOT EXISTS full_recordings (
  id SERIAL PRIMARY KEY,
  data BYTEA NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`;
