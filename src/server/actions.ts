"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { insertBooking } from "./queries";

export async function schedule(formData: FormData) {
  const rawFormData = {
    date: formData.get("date") as string,
    time: formData.get("time") as string,
    ci: formData.get("ci") as string,
    name: formData.get("name") as string,
    service: formData.get("service") as string,
  };

  await insertBooking({
    ...rawFormData,
    state: "Aprobado",
  });

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
