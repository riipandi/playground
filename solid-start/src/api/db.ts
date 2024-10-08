import Database from "better-sqlite3";
import type { BetterSQLite3Database } from "drizzle-orm/better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";

const sqlite = new Database("./drizzle/db.sqlite");

export const db: BetterSQLite3Database = drizzle(sqlite);
