import { type Metadata } from "next";
import { type PropsWithChildren } from "react";
import AdminHeader from "~/components/layouts/admin-header";
import Footer from "~/components/layouts/footer";
import ProtectedLayout from "~/components/layouts/protected-layout";

export const metadata: Metadata = {
  title: "Butterfly Nails | Admin",
};

export default function AdminLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <ProtectedLayout>
      <AdminHeader />
      {children}
      <Footer />
    </ProtectedLayout>
  );
}
