import { type Metadata } from "next";
import { type PropsWithChildren } from "react";
import ProtectedWrapper from "~/components/protected-wrapper";

export const metadata: Metadata = {
  title: "Butterfly Nails | Admin",
};

export default function AdminLayout({ children }: Readonly<PropsWithChildren>) {
  return <ProtectedWrapper>{children}</ProtectedWrapper>;
}
