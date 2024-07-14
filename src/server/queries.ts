import dayjs from "dayjs";
import { and, eq, gt, sql } from "drizzle-orm";
import { type Booking } from "~/types";
import { db } from "./db";
import { booking } from "./db/schema";

export async function getCurrentBookings() {
  return db
    .select()
    .from(booking)
    .where(
      and(
        eq(booking.date, dayjs(new Date()).format("YYYY-MM-DD")),
        eq(booking.deleted, false),
      ),
    )
    .orderBy(booking.date, booking.time);
}

export async function getNextBookings() {
  return db
    .select()
    .from(booking)
    .where(
      and(
        gt(booking.date, dayjs(new Date()).format("YYYY-MM-DD")),
        eq(booking.deleted, false),
      ),
    )
    .orderBy(booking.date, booking.time)
    .limit(270);
}

export async function deleteBooking(bookingId: number) {
  await db
    .update(booking)
    .set({ deleted: true })
    .where(eq(booking.id, bookingId));
}

export async function approveBooking(bookingId: number) {
  return db
    .update(booking)
    .set({ state: "Aprobado" })
    .where(eq(booking.id, bookingId));
}

export async function insertBooking(bookingData: Omit<Booking, "id">) {
  return db.insert(booking).values(bookingData);
}

// 🤓☝ statistics queries

export async function getFrequentClients() {
  const query = await db.execute(
    sql`SELECT ci, username, bookings FROM (SELECT ci, username, COUNT(*) AS bookings FROM "butterfly-nails_booking" GROUP BY ci,username) AS subquery WHERE bookings >= 2 ORDER BY bookings DESC LIMIT 10`,
  );

  return query.rows;
}

export async function getTotalServices() {
  const query = await db.execute(
    sql`SELECT service, COUNT(*) AS total FROM "butterfly-nails_booking" GROUP BY service`,
  );

  return query.rows;
}

export async function getMonthServices() {
  const query = await db.execute(
    sql`SELECT EXTRACT(MONTH FROM date) AS month, COUNT(*) AS bookings FROM "butterfly-nails_booking" GROUP BY month ORDER BY month`,
  );

  return query.rows;
}
