import BookingForm from "~/components/booking-form";
import { getAllBookings } from "~/server/queries";

export default async function HomePage() {
  const bookings = await getAllBookings();

  return (
    <main className="mx-auto grid max-w-screen-md gap-8 p-8">
      <h1 className="text-center text-5xl font-bold tracking-tighter">
        butterfly-nails
      </h1>
      <BookingForm bookings={bookings} />
      <ul className="grid gap-4">
        {bookings.map((booking) => (
          <li
            key={booking.id}
            className="rounded border border-neutral-500 bg-neutral-200 p-4 text-neutral-500"
          >
            <pre className="whitespace-break-spaces">
              {JSON.stringify(booking, null, 4)}
            </pre>
          </li>
        ))}
      </ul>
    </main>
  );
}
