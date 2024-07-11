"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { type Booking } from "~/types";
import { approveBooking, deleteBooking, insertBooking } from "./queries";

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
  } as Omit<Booking, "id">;

  await insertBooking(rawData);
  redirect("/");
}

export async function login(formData: FormData) {
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
