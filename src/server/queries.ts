import { gte, lt } from "drizzle-orm";
import { type Booking } from "~/types";
import { db } from "./db";
import { booking } from "./db/schema";

export async function getPreviousBookings() {
  return db
    .select()
    .from(booking)
    .where(lt(booking.date, new Date().toLocaleDateString("en-CA")))
    .orderBy(booking.date, booking.time);
}

export async function getNextBookings() {
  return db
    .select()
    .from(booking)
    .where(gte(booking.date, new Date().toLocaleDateString("en-CA")))
    .orderBy(booking.date, booking.time);
}

export async function insertBooking(bookingData: Omit<Booking, "id">) {
  await db.insert(booking).values(bookingData);
}
