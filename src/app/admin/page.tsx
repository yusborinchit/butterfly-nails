import BookingTable from "~/components/booking-table";
import { getCurrentBookings, getNextBookings } from "~/server/queries";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const [currentBookings, nextBookings] = await Promise.all([
    getCurrentBookings(),
    getNextBookings(),
  ]);

  return (
    <main className="mx-auto grid max-w-screen-lg gap-8 p-8">
      <h1 className="text-center text-5xl font-bold tracking-tighter">
        admin-dashboard
      </h1>
      <section className="grid gap-4">
        <h2 className="text-3xl font-bold tracking-tighter">Turnos del Día:</h2>
        <BookingTable
          bookings={currentBookings}
          emptyMessage="No hay turnos el día de hoy :("
        />
      </section>
      <section className="grid gap-4">
        <h2 className="text-3xl font-bold tracking-tighter">
          Turnos Próximos:
        </h2>
        <BookingTable
          bookings={nextBookings}
          emptyMessage="No hay turnos próximos :("
        />
      </section>
    </main>
  );
}
