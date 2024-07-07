import {
  date,
  index,
  pgTableCreator,
  serial,
  varchar,
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `butterfly-nails_${name}`);

export const booking = createTable(
  "booking",
  {
    id: serial("id").primaryKey(),
    date: date("date").notNull(),
    time: varchar("time", { length: 5 }).notNull(),
    ci: varchar("ci", { length: 8 }).notNull(),
    name: varchar("name", { length: 256 }).notNull(),
    service: varchar("service", { length: 64 }).notNull(),
    state: varchar("state", { length: 64 }).notNull(),
    method: varchar("method", { length: 64 }).notNull(),
  },
  (example) => ({
    dateIndex: index("date_idx").on(example.date),
  }),
);
