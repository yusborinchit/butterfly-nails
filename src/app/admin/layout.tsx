import { type Metadata } from "next";
import { type PropsWithChildren } from "react";
import ProtectedLayout from "~/components/layouts/protected-layout";

export const metadata: Metadata = {
  title: "Butterfly Nails | Admin",
};

export default function AdminLayout({ children }: Readonly<PropsWithChildren>) {
  return <ProtectedLayout>{children}</ProtectedLayout>;
}
