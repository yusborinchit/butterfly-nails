import { getNextBookings, getPreviousBookings } from "~/server/queries";
import { parseStringToDate } from "~/utils/date-utils";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const nextBookings = await getNextBookings();
  const prevBookings = await getPreviousBookings();

  return (
    <main className="mx-auto grid max-w-screen-lg gap-8 p-8">
      <h1 className="text-center text-5xl font-bold tracking-tighter">
        admin-dashboard
      </h1>
      <section className="grid gap-4">
        <h2 className="text-3xl font-bold tracking-tighter">
          Turnos Próximos:
        </h2>
        {nextBookings.length > 0 ? (
          <ul className="grid gap-4">
            {nextBookings.map((booking) => (
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
                  )}
                </pre>
              </li>
            ))}
          </ul>
        ) : (
          <div className="rounded border border-neutral-500 bg-neutral-200 p-4 text-neutral-500">
            No hay turnos próximos :(
          </div>
        )}
      </section>
      <section className="grid gap-4">
        <h2 className="text-3xl font-bold tracking-tighter">Turnos Previos:</h2>
        {prevBookings.length > 0 ? (
          <ul className="grid gap-4">
            {prevBookings.map((booking) => (
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
                  )}
                </pre>
              </li>
            ))}
          </ul>
        ) : (
          <div className="rounded border border-neutral-500 bg-neutral-200 p-4 text-neutral-500">
            No hay turnos próximos :(
          </div>
        )}
      </section>
    </main>
  );
}
