-- Initialize database tables for the template
-- Run this script after connecting your database

-- Items table (example CRUD operations)
CREATE TABLE IF NOT EXISTS items (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_items_created_at ON items(created_at DESC);

-- Optional: Add Row Level Security (RLS) if using Supabase
-- ALTER TABLE items ENABLE ROW LEVEL SECURITY;
-- CREATE POLICY "Enable read access for all users" ON items
--   FOR SELECT USING (true);
-- CREATE POLICY "Enable insert for authenticated users" ON items
--   FOR INSERT WITH CHECK (true);
-- CREATE POLICY "Enable update for users based on user_id" ON items
--   FOR UPDATE USING (true) WITH CHECK (true);
-- CREATE POLICY "Enable delete for users based on user_id" ON items
--   FOR DELETE USING (true);
