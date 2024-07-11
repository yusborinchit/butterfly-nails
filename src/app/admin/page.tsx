import MainLayout from "~/components/layouts/main-layout";
import CurrentBookingsTable from "~/components/tables/current-bookings-table";
import NextBookingsTable from "~/components/tables/next-bookings-table";
import { getCurrentBookings, getNextBookings } from "~/server/queries";

export const dynamic = "force-dynamic";

const TABLE_HEADER = [
  "Fecha",
  "Turno",
  "CI",
  "Nombre",
  "Usuario",
  "Servicio",
  "Estado",
  "",
];

export default async function AdminDashboard() {
  const [currentBookings, nextBookings] = await Promise.all([
    getCurrentBookings(),
    getNextBookings(),
  ]);

  return (
    <main className="py-4">
      <MainLayout className="flex flex-col gap-24">
        <section className="flex flex-col gap-4">
          <CurrentBookingsTable
            headers={TABLE_HEADER}
            bookings={currentBookings}
            emptyMessage="No hay turnos el día de hoy :("
          />
        </section>
        <section className="flex flex-col gap-4">
          <NextBookingsTable
            headers={TABLE_HEADER}
            bookings={nextBookings}
            emptyMessage="No hay turnos próximos :("
          />
        </section>
        <section></section>
      </MainLayout>
    </main>
  );
}
