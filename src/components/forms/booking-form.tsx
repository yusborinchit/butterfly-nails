"use client";

import dayjs from "dayjs";
import { type ChangeEvent, useRef, useState } from "react";
import { toast } from "sonner";
import { useCalendar } from "~/hooks/use-calendar";
import { sendEmailAction } from "~/server/actions";
import { type Booking } from "~/types";
import { BookingFormSchema } from "~/zod-schemas";
import ErrorToast from "../error-toast";
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

  async function handleSubmit(formData: FormData) {
    const { success, error } = BookingFormSchema.safeParse(
      Object.fromEntries(formData),
    );

    if (!success) {
      const message = error.errors[0]?.message ?? "";
      return toast.custom(() => <ErrorToast message={message} />, {
        position: "top-center",
      });
    }

    // await scheduleAction(formData);
    await sendEmailAction(formData);
  }

  return (
    <form
      ref={formRef}
      action={handleSubmit}
      onChange={handlePriceChange}
      className="mt-8 grid gap-4 md:grid-cols-2"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <input
          type="hidden"
          name="date"
          value={dayjs(date).format("YYYY-MM-DD")}
        />
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
        <BookingCalendar
          bookings={props.bookings}
          date={date}
          currentDate={currentDate}
          maxDate={maxDate}
          handleDateChange={handleDateChange}
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="grid gap-4 md:grid-cols-2">
          <TextInput label="Nombre:" name="name" placeholder="Fideos..." />
          <TextInput label="Cédula:" name="ci" placeholder="12345678..." />
          <TextInput
            label="Usuario de Instagram:"
            name="username"
            placeholder="butterfly_nailx..."
          />
          <TextInput
            label="Número de Teléfono:"
            name="phone"
            placeholder="094567891..."
          />
        </div>
        <TextareaInput
          label="Descripción:"
          name="description"
          placeholder="Una breve descripción aquí..."
        />
        <SubmitButton disabled={!isDateAvailable} className="mt-auto">
          {isDateAvailable ? `Agendar (${PRICES[service]})` : "No Disponible"}
        </SubmitButton>
      </div>
    </form>
  );
}
