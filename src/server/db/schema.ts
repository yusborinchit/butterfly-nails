import {
  boolean,
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
    time: varchar("time", { length: 5 }).notNull(), // 09:00 || 12:00 || 18:00
    ci: varchar("ci", { length: 8 }).notNull(),
    name: varchar("name", { length: 256 }).notNull(),
    username: varchar("username", { length: 64 }).notNull(),
    phone: varchar("phone", { length: 9 }).notNull(),
    service: varchar("service", { length: 64 }).notNull(), // Soft Gel || Capping || Esmaltado Semi
    description: varchar("description", { length: 364 }).notNull(),
    state: varchar("state", { length: 64 }).notNull(), // Aprobado || Pendiente
    deleted: boolean("deleted").notNull().default(false),
  },
  (example) => ({
    dateIndex: index("date_idx").on(example.date),
  }),
);
