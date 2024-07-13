"use client";

import dayjs from "dayjs";
import { useRef } from "react";
import { useCalendar } from "~/hooks/use-calendar";
import { scheduleAction } from "~/server/actions";
import { type Booking } from "~/types";
import BookingCalendar from "./booking-calendar";
import SelectInput from "./select-input";
import SubmitButton from "./submit-button";
import TextInput from "./text-input";
import TextareaInput from "./textarea-input";

interface Props {
  bookings: Booking[];
}

export default function BookingForm(props: Readonly<Props>) {
  const formRef = useRef<HTMLFormElement | null>(null);

  const {
    date,
    handleDateChange,
    currentDate,
    maxDate,
    dateTurns,
    isDateAvailable,
  } = useCalendar(props.bookings);

  return (
    <form
      ref={formRef}
      action={scheduleAction}
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
          name="username"
          placeholder="Tu Usuario aquí..."
        />
        <TextInput
          label="Teléfono:"
          name="phone"
          placeholder="Tu número de Teléfono aquí..."
        />
      </div>
      <BookingCalendar
        bookings={props.bookings}
        date={date}
        currentDate={currentDate}
        maxDate={maxDate}
        handleDateChange={handleDateChange}
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
      <TextareaInput
        label="Breve Descripción:"
        name="description"
        placeholder="Una breve descripción aquí..."
      />
      <SubmitButton className="mt-4" disabled={!isDateAvailable}>
        {isDateAvailable ? "Agendar" : "No Disponible"}
      </SubmitButton>
    </form>
  );
}
