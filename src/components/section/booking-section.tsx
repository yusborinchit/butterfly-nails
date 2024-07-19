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
    <MainLayout id="agenda" className="mt-32">
      <h2 className="text-center text-5xl font-bold leading-[0.85] tracking-tighter">
        Agenda Online.
      </h2>
      <p className="mx-auto mt-6 max-w-md text-lg">
        ¡Reserva tu cita conmigo! Selecciona el servicio que desees y elige la
        fecha y hora que más te convenga.
      </p>
      <div className="mt-2">
        <BookingForm bookings={bookings} />
      </div>
    </MainLayout>
  );
}
