"use client";

import dayjs from "dayjs";
import { useCalendar } from "~/hooks/use-calendar";
import { schedule } from "~/server/actions";
import { type Booking } from "~/types";
import { getDateTurns } from "~/utils/get-date-turns";
import BookingCalendar from "./booking-calendar";
import SelectInput from "./select-input";
import SubmitButton from "./submit-button";
import TextInput from "./text-input";

interface Props {
  bookings: Booking[];
}

export default function BookingForm(props: Readonly<Props>) {
  const { date, setDate, currentDate, maxDate } = useCalendar();
  const { dateTurns, isDateAvailable } = getDateTurns(date, props.bookings);

  return (
    <form action={schedule} className="grid gap-4 md:grid-cols-2">
      <input
        type="hidden"
        name="date"
        value={dayjs(date).format("YYYY-MM-DD")}
      />
      <BookingCalendar
        date={date}
        currentDate={currentDate}
        maxDate={maxDate}
        setDate={setDate}
      />
      <div className="flex flex-col gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <TextInput
            label="Cédula:"
            name="ci"
            placeholder="Tu Cédula aquí..."
          />
          <TextInput
            label="Nombre Completo:"
            name="name"
            placeholder="Tu Nombre aquí..."
          />
        </div>
        <SelectInput
          label="Turno:"
          name="time"
          options={isDateAvailable ? dateTurns : ["No Disponibles"]}
        />
        <SelectInput
          label="Servicio:"
          name="service"
          options={["Soft Gel", "Capping", "Esmaltado Semi"]}
        />
        <div className="mt-auto flex flex-col gap-4 md:flex-row md:items-center">
          <SubmitButton
            name="method"
            value="MercadoPago"
            disabled={!isDateAvailable}
            className="bg-blue-700"
          >
            Mercado Pago
          </SubmitButton>
          <SubmitButton
            name="method"
            value="Transferencia"
            disabled={!isDateAvailable}
          >
            Transferencia
          </SubmitButton>
        </div>
      </div>
    </form>
  );
}
