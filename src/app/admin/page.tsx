import MainLayout from "~/components/layouts/main-layout";
import BookingTable from "~/components/tables/booking-table";
import { getCurrentBookings, getNextBookings } from "~/server/queries";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const [currentBookings, nextBookings] = await Promise.all([
    getCurrentBookings(),
    getNextBookings(),
  ]);

  return (
    <main className="py-4">
      <MainLayout className="flex flex-col gap-16">
        <section className="flex flex-col gap-4">
          <BookingTable
            title="Próximos Turnos"
            bookings={currentBookings}
            emptyMessage="No hay turnos el día de hoy :("
            hasSearch={false}
            hasPagination={false}
          />
        </section>
        <section className="flex flex-col gap-4">
          <BookingTable
            title="Próximos Turnos"
            bookings={nextBookings}
            emptyMessage="No hay turnos próximos :("
            hasSearch={true}
            hasPagination={true}
          />
        </section>
        <section></section>
      </MainLayout>
    </main>
  );
}
