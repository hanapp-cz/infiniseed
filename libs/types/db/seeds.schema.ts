import {
  integer,
  pgEnum,
  pgTable,
  varchar,
  timestamp,
  text,
} from "drizzle-orm/pg-core";
import { InferInsertModel, InferSelectModel } from "drizzle-orm";

export const SOURCE = [
  "SAVED",
  "PURCHASED",
  "TRADED",
  "GIFTED",
  "OTHER",
] as const;

export const sourceEnum = pgEnum("source", SOURCE);

export const seeds = pgTable("seeds", {
  id: integer().primaryKey().generatedByDefaultAsIdentity(),
  name: varchar("name", { length: 255 }).notNull(),
  species: varchar("species", { length: 255 }).notNull(),
  source: sourceEnum("source").notNull(),
  harvestYear: integer("harvest_year"),
  viabilityYears: integer("viability_years"),
  quantity: integer("quantity").notNull(),
  photoUrl: varchar("photo_url", { length: 500 }),
  note: text("note"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

// Type definitions
export type Seed = InferSelectModel<typeof seeds>;
export type NewSeed = InferInsertModel<typeof seeds>;
export type SeedSchema = typeof seeds;
