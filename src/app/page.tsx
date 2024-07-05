import SelectInput from "~/components/select-input";
import { TextInput } from "~/components/text-input";
import { db } from "~/server/db";

export default async function HomePage() {
  const bookings = await db.query.booking.findMany();

  return (
    <main className="mx-auto grid max-w-screen-md gap-8 p-8">
      <h1 className="text-center text-5xl font-bold tracking-tighter">
        butterfly-nails
      </h1>
      <form action="" className="grid gap-4 sm:grid-cols-5">
        <div className="sm:col-span-2">
          <TextInput label="Fecha:" name="date" placeholder="11/09/2024..." />
        </div>
        <div className="grid gap-4 sm:col-span-3 sm:grid-cols-2">
          <TextInput label="Cédula:" name="ci" placeholder="12345678..." />
          <TextInput
            label="Nombre Completo:"
            name="name"
            placeholder="Santiago García..."
          />
          <div className="col-span-full grid gap-4">
            <SelectInput label="Turno:" name="time">
              <option value="09:00">09:00</option>
              <option value="12:00">15:00</option>
              <option value="18:00">18:00</option>
            </SelectInput>
            <SelectInput label="Servicio:" name="service">
              <option value="Soft Gel">Soft Gel</option>
              <option value="Capping">Capping</option>
              <option value="Semi">Semi</option>
            </SelectInput>
          </div>
          <button
            type="submit"
            className="mt-4 grid rounded bg-neutral-950 px-6 py-2.5 text-lg font-bold text-white"
          >
            Realizar Seña
          </button>
        </div>
      </form>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id} className="rounded bg-neutral-200 p-4">
            <pre>{JSON.stringify(booking, null, 4)}</pre>
          </li>
        ))}
      </ul>
    </main>
  );
}
