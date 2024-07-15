import { getCurrentBookings, getNextBookings } from "~/server/queries";
import BookingForm from "../forms/booking-form";
import MainLayout from "../layouts/main-layout";

export default async function BookingSection() {
  const [currentBookings, nextBookings] = await Promise.all([
    getCurrentBookings(),
    getNextBookings(),
  ]);

  const bookings = [...currentBookings, ...nextBookings];

  return (
    <MainLayout id="agenda" as="section" className="mt-44 flex flex-col gap-4">
      <h2 className="text-center text-5xl font-bold -tracking-[0.075em]">
        Agenda
      </h2>
      <p className="mx-auto max-w-lg text-center text-neutral-500">
        ¡Reserva tu cita conmigo! Selecciona el servicio que desees y elige la
        fecha y hora que más te convenga.
      </p>
      <div className="mt-2">
        <BookingForm bookings={bookings} />
      </div>
    </MainLayout>
  );
}
