"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { type Booking } from "~/types";
import { insertBooking } from "./queries";

export async function schedule(formData: FormData) {
  const rawData = {
    ...Object.fromEntries(formData),
    state: "Aprobado",
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
