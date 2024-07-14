"use client";

import dayjs from "dayjs";
import { type ChangeEvent, useRef, useState } from "react";
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

const PRICES: Record<string, string> = {
  "Soft Gel": "A partir de 650$",
  "Esmaltado Semi": "A partir de 400$",
  Híbridas: "A partir de 800$",
  Capping: "A partir de 450$",
};

export default function BookingForm(props: Readonly<Props>) {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [service, setService] = useState("Soft Gel");

  const {
    date,
    handleDateChange,
    currentDate,
    maxDate,
    dateTurns,
    isDateAvailable,
  } = useCalendar(props.bookings);

  function handlePriceChange(event: ChangeEvent<HTMLFormElement>) {
    const formData = new FormData(event.currentTarget);
    setService((formData.get("service") as string) ?? "Soft Gel");
  }

  return (
    <form
      ref={formRef}
      action={scheduleAction}
      onChange={handlePriceChange}
      className="flex flex-col gap-4"
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
          options={["Soft Gel", "Capping", "Esmaltado Semi", "Híbridas"]}
        />
      </div>
      <TextareaInput
        label="Breve Descripción:"
        name="description"
        placeholder="Una breve descripción aquí..."
      />
      <div className="mt-4 flex flex-col gap-1">
        <SubmitButton disabled={!isDateAvailable}>
          {isDateAvailable ? `Agendar (${PRICES[service]})` : "No Disponible"}
        </SubmitButton>
      </div>
    </form>
  );
}
