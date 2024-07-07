import { getAllBookings } from "~/server/queries";
import { parseStringToDate } from "~/utils/date-utils";

export default async function AdminDashboard() {
  const bookings = await getAllBookings();

  return (
    <main className="mx-auto grid max-w-screen-lg gap-8 p-8">
      <h1 className="text-center text-5xl font-bold tracking-tighter">
        admin-dashboard
      </h1>
      <ul className="grid gap-4">
        {bookings.map((booking) => (
          <li
            key={booking.id}
            className="rounded border border-neutral-500 bg-neutral-200 p-4 text-neutral-500"
          >
            <pre className="whitespace-break-spaces">
              {JSON.stringify(
                {
                  ci: booking.ci,
                  date: parseStringToDate(booking.date),
                  time: booking.time,
                  service: booking.service,
                },
                null,
                2,
              )}
            </pre>
          </li>
        ))}
      </ul>
    </main>
  );
}
