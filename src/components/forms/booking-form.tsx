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
    <form
      action={schedule}
      className="mx-auto flex max-w-screen-sm flex-col gap-4"
    >
      <input
        type="hidden"
        name="date"
        value={dayjs(date).format("YYYY-MM-DD")}
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <TextInput label="Cédula:" name="ci" placeholder="Tu Cédula aquí..." />
        <TextInput
          label="Nombre Completo:"
          name="name"
          placeholder="Tu Nombre aquí..."
        />
        <TextInput
          label="Usuario de Instagram:"
          name="ig"
          placeholder="Tu Usuario aquí..."
        />
        <TextInput
          label="Teléfono:"
          name="phone"
          placeholder="Tu número de Teléfono aquí..."
        />
      </div>
      <BookingCalendar
        date={date}
        currentDate={currentDate}
        maxDate={maxDate}
        setDate={setDate}
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <SelectInput
          label="Turno:"
          name="time"
          options={isDateAvailable ? dateTurns : ["No Disponible"]}
        />
        <SelectInput
          label="Servicio:"
          name="service"
          options={["Soft Gel", "Capping", "Esmaltado Semi"]}
        />
      </div>
      <SubmitButton disabled={!isDateAvailable}>
        {isDateAvailable ? "Pagar Seña" : "No Disponible"}
      </SubmitButton>
    </form>
  );
}
