import dayjs from "dayjs";
import { and, eq, gt, lt } from "drizzle-orm";
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

export async function getPreviousBookings() {
  return db
    .select()
    .from(booking)
    .where(
      and(
        lt(booking.date, dayjs(new Date()).format("YYYY-MM-DD")),
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
    .orderBy(booking.date, booking.time);
}

export async function deleteBooking(bookingId: number) {
  return db
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
  await db.insert(booking).values(bookingData);
}
