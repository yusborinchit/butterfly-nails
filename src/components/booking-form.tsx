"use client";

import { useMemo, useState } from "react";
import Calendar from "react-calendar";
import { schedule } from "~/server/actions";
import { type Booking } from "~/types";
import SelectInput from "./select-input";
import TextInput from "./text-input";

interface Props {
  bookings: Booking[];
}

const TURNS = ["09:00", "12:00", "18:00"] as const;

export default function BookingForm(props: Readonly<Props>) {
  const [date, setDate] = useState(new Date());
  const currentDate = useMemo(() => new Date(), []);

  const turnsTaken = props.bookings
    .filter((booking) => booking.date === date.toLocaleDateString("en-CA"))
    .map((booking) => booking.time);

  const turnsAvailable = TURNS.filter((time) => !turnsTaken.includes(time));

  const maxDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 4,
    0,
  );

  const isDateAvailable = turnsAvailable.length > 0;

  return (
    <form action={schedule} className="grid gap-4 md:grid-cols-2">
      <input
        type="hidden"
        name="date"
        value={date.toLocaleDateString("en-CA")}
      />
      <div>
        <Calendar
          locale="es"
          defaultValue={date}
          onChange={(value) => setDate(value as Date)}
          minDate={currentDate}
          maxDate={maxDate}
          minDetail="month"
          maxDetail="month"
          prevLabel="<"
          nextLabel=">"
          tileClassName={({ date }) => (date.getDay() === 0 ? "red-tiles" : "")}
          className="react-calendar"
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          <TextInput label="Cédula:" name="ci" placeholder="12345678..." />
          <TextInput
            label="Nombre Completo:"
            name="name"
            placeholder="Santiago García..."
          />
        </div>
        <SelectInput label="Turno:" name="time">
          {isDateAvailable ? (
            <>
              {turnsAvailable.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </>
          ) : (
            <option value="No">- No Quedan Turnos -</option>
          )}
        </SelectInput>
        <SelectInput label="Servicio:" name="service">
          <option value="Soft Gel">Soft Gel</option>
          <option value="Capping">Capping</option>
          <option value="Esmaltado Semi">Esmaltado Semi</option>
        </SelectInput>
        <div className="mt-auto flex items-center gap-4">
          <button
            type="submit"
            name="method"
            value="MercadoPago"
            disabled={!isDateAvailable}
            className="mt-auto grid h-fit w-fit rounded bg-blue-700 px-6 py-2.5 font-bold text-white disabled:bg-neutral-600"
          >
            Mercado Pago
          </button>
          <button
            type="submit"
            name="method"
            value="Transferencia"
            disabled={!isDateAvailable}
            className="mt-auto grid h-fit w-fit rounded bg-neutral-950 px-6 py-2.5 font-bold text-white disabled:bg-neutral-600"
          >
            Transferencia
          </button>
        </div>
      </div>
    </form>
  );
}
