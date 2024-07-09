import dayjs from "dayjs";
import { eq, gt, lt } from "drizzle-orm";
import { type Booking } from "~/types";
import { db } from "./db";
import { booking } from "./db/schema";

export async function getCurrentBookings() {
  return db
    .select()
    .from(booking)
    .where(eq(booking.date, dayjs(new Date()).format("YYYY-MM-DD")))
    .orderBy(booking.date, booking.time);
}

export async function getPreviousBookings() {
  return db
    .select()
    .from(booking)
    .where(lt(booking.date, dayjs(new Date()).format("YYYY-MM-DD")))
    .orderBy(booking.date, booking.time);
}

export async function getNextBookings() {
  return db
    .select()
    .from(booking)
    .where(gt(booking.date, dayjs(new Date()).format("YYYY-MM-DD")))
    .orderBy(booking.date, booking.time);
}

export async function insertBooking(bookingData: Omit<Booking, "id">) {
  await db.insert(booking).values(bookingData);
}
