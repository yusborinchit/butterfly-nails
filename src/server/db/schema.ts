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
    username: varchar("username", { length: 64 }).notNull(),
    phone: varchar("phone", { length: 9 }).notNull(),
    service: varchar("service", { length: 64 }).notNull(),
    description: varchar("description", { length: 256 }).notNull(),
    state: varchar("state", { length: 64 }).notNull(),
  },
  (example) => ({
    dateIndex: index("date_idx").on(example.date),
  }),
);
