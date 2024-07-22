"use server";

import dayjs from "dayjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Resend } from "resend";
import NotificationEmail from "~/components/emails/notification-email";
import { BookingFormSchema } from "~/zod-schemas";
import { approveBooking, deleteBooking, insertBooking } from "./queries";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function deleteAction(formData: FormData) {
  const bookingId = Number(formData.get("id") as string);

  await deleteBooking(bookingId);

  redirect("/admin");
}

export async function approveAction(formData: FormData) {
  const bookingId = Number(formData.get("id") as string);

  await approveBooking(bookingId);

  redirect("/admin");
}

export async function scheduleAction(formData: FormData) {
  const rawData = {
    ...Object.fromEntries(formData),
    state: "Pendiente",
  };

  const { data, success } = BookingFormSchema.safeParse(rawData);
  if (!success) return;

  await insertBooking(data);

  await resend.emails.send({
    from: "Butterfly Nails <notificaciones@butterflynails.shop>",
    to:
      data.email !== ""
        ? ["butteflynails.notificaciones@gmail.com", data.email]
        : ["butteflynails.notificaciones@gmail.com"],
    subject: `Notificación del turno ${dayjs(data.date).format("DD/MM/YYYY")} a las ${data.time} hs de ${data.name}`,
    react: NotificationEmail({ booking: data }),
  });

  const { date, time, service } = data;
  const url = `/booking-info?date=${date}&time=${time}&service=${service}`;

  redirect(url);
}

export async function loginAction(formData: FormData) {
  const username = formData.get("username");
  const password = formData.get("password");

  if (
    username !== process.env.ADMIN_USERNAME &&
    password !== process.env.ADMIN_PASSWORD
  )
    return;

  cookies().set("username", process.env.ADMIN_USERNAME!);
  cookies().set("password", process.env.ADMIN_PASSWORD!);

  redirect("/admin");
}
