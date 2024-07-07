import BookingForm from "~/components/booking-form";
import { getAllBookings } from "~/server/queries";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const bookings = await getAllBookings();

  return (
    <main className="mx-auto grid max-w-screen-lg gap-8 p-8">
      <h1 className="text-center text-5xl font-bold tracking-tighter">
        butterfly-nails
      </h1>
      <BookingForm bookings={bookings} />
    </main>
  );
}
