import dayjs from "dayjs";
import { type Booking } from "~/types";

export function getDateTurns(date: Date, bookings: Booking[]) {
  const turnsTaken = bookings
    .filter((booking) => booking.date === dayjs(date).format("YYYY-MM-DD"))
    .map((booking) => booking.time);

  const turnsAvailable = ["09:00", "12:00", "18:00"].filter(
    (time) => !turnsTaken.includes(time),
  );

  const isDateAvailable = turnsAvailable.length > 0;

  return { dateTurns: turnsAvailable, isDateAvailable };
}
