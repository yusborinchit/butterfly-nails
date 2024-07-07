import BookingForm from "../booking-form";

export default function BookingSection() {
  return (
    <section className="mx-auto mt-44 flex max-w-screen-lg flex-col gap-4 px-4">
      <h2 className="text-center text-5xl font-bold -tracking-[0.075em]">
        Agenda
      </h2>
      <p className="mx-auto max-w-lg text-center text-neutral-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis,
        ducimus vero. Esse amet.
      </p>
      <div className="mt-2">
        <BookingForm bookings={[]} />
      </div>
    </section>
  );
}
