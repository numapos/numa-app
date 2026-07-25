import { database } from "../client";

export function runInitialMigration() {
  database.execSync(`
    CREATE TABLE IF NOT EXISTS metadata (
      key TEXT PRIMARY KEY NOT NULL,
      value TEXT
    );
  `);
}