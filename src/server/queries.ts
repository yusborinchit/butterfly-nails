import { type Booking } from "~/types";
import { db } from "./db";
import { booking } from "./db/schema";

export async function getAllBookings() {
  return db.select().from(booking).orderBy(booking.date, booking.time);
}

export async function insertBooking(bookingData: Omit<Booking, "id">) {
  await db.insert(booking).values(bookingData);
}
