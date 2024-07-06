"use server";

import { insertBooking } from "./queries";

export async function schedule(formData: FormData) {
  await insertBooking({
    date: new Date(formData.get("date") as string),
    time: formData.get("time") as string,
    service: formData.get("service") as string,
    state: "Aprobado",
    name: formData.get("name") as string,
    ci: formData.get("ci") as string,
  });
}
