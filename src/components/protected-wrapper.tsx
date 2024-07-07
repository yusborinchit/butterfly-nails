import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { type PropsWithChildren } from "react";

export default function ProtectedWrapper({
  children,
}: Readonly<PropsWithChildren>) {
  const username = cookies().get("username")?.value;
  const password = cookies().get("password")?.value;

  if (
    username !== process.env.ADMIN_USERNAME &&
    password !== process.env.ADMIN_PASSWORD
  )
    redirect("/login");

  return children;
}
