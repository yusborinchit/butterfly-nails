import "~/styles/calendar.css";
import "~/styles/globals.css";

import { type Metadata } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import { type PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Butterfly Nails | Inicio",
  description: "La agenda online de Mika",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const font = Schibsted_Grotesk({ subsets: ["latin"] });

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html
      lang="es"
      className={`scroll-pt-[82px] scroll-smooth ${font.className}`}
    >
      <body className="text-text">{children}</body>
    </html>
  );
}
