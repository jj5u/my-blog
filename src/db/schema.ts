// src/db/schema.ts
import { bigint, pgTable, text, timestamp } from "drizzle-orm/pg-core";
// use snake_case table name
export const blogs = pgTable("blogs", {
  id: bigint({ mode: "number" }).primaryKey().generatedAlwaysAsIdentity(),
  title: text().notNull(),
  content: text().notNull(),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
});
