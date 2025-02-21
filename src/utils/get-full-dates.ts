import { type Booking } from "~/types";

export function getFullDates(bookings: Booking[]) {
  const bookingMap = bookings.reduce((acc, booking) => {
    if (!acc.has(booking.date)) return acc.set(booking.date, 1);
    return acc.set(booking.date, acc.get(booking.date)! + 1);
  }, new Map<string, number>());

  const fullDates = Array.from(bookingMap.entries())
    .filter(([_, times]) => times === 4)
    .map(([date]) => date);

  return fullDates;
}
