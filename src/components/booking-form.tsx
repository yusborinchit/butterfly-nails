"use client";

import { useMemo, useState } from "react";
import { schedule } from "~/server/actions";
import { type Booking } from "~/types";
import { createCurrentDate, parseDate } from "~/utils/date-utils";
import SelectInput from "./select-input";
import TextInput from "./text-input";

interface Props {
  bookings: Booking[];
}

export default function BookingForm(props: Readonly<Props>) {
  const [currentDate, setCurrentDate] = useState(createCurrentDate());

  const availableTimes = useMemo(() => {
    const times = props.bookings
      .filter(({ date }) => {
        return parseDate(date) === parseDate(currentDate);
      })
      .map(({ time }) => time);
    return ["09:00", "12:00", "18:00"].filter((time) => !times.includes(time));
  }, [currentDate, props.bookings]);
  const isDateAvailable = availableTimes.length > 0;

  return (
    <form action={schedule} className="grid gap-4 sm:grid-cols-5">
      <div className="sm:col-span-2">
        <div className="flex flex-col">
          <label htmlFor="date" className="text-sm font-bold">
            Fecha:
          </label>
          <input
            id="date"
            name="date"
            type="date"
            onChange={(e) => setCurrentDate(new Date(e.target.value))}
            value={currentDate.toISOString().split("T")[0]}
            className="rounded border-neutral-500 placeholder:text-neutral-500"
          />
        </div>
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
            {isDateAvailable ? (
              <>
                {availableTimes.map((time) => (
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
            <option value="Semi">Semi</option>
          </SelectInput>
        </div>
        <button
          type="submit"
          disabled={!isDateAvailable}
          className="mt-4 grid rounded bg-neutral-950 px-6 py-2.5 text-lg font-bold text-white disabled:bg-neutral-600"
        >
          Realizar Seña
        </button>
      </div>
    </form>
  );
}
