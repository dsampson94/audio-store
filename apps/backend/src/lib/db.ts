import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.on('connect', () => console.log('Connected to the database.'));
pool.on('error', (err) => console.error('Database connection error:', err.stack));

export default pool;
