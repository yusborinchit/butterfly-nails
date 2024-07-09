"use client";

import { useState } from "react";
import MenuIcon from "../icons/menu-icon";
import MainLayout from "../layouts/main-layout";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        data-open={isOpen}
        className="pointer-events-none fixed inset-0 z-20 h-screen w-screen bg-white bg-opacity-60 opacity-0 backdrop-blur-md transition-opacity data-[open=true]:opacity-100 sm:hidden"
      ></div>
      <MainLayout
        as="header"
        className="sticky left-0 top-0 z-30 flex items-center bg-white py-3"
      >
        <img
          src="/bn-logo.png"
          alt=""
          className="z-30 h-11 w-11 rounded-full"
        />
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="z-50 ml-auto sm:hidden"
        >
          <MenuIcon className="h-11 w-11" />
        </button>
        <nav
          data-open={isOpen}
          className="ml-auto hidden items-center data-[open=true]:absolute data-[open=true]:left-0 data-[open=true]:top-0 data-[open=true]:flex data-[open=true]:w-screen data-[open=false]:flex-row data-[open=true]:flex-col data-[open=true]:bg-white data-[open=true]:pb-4 data-[open=true]:pt-[72px] sm:flex sm:flex-row sm:data-[open=true]:relative sm:data-[open=true]:w-auto sm:data-[open=true]:flex-row sm:data-[open=true]:py-0"
        >
          {["Inicio", "Servicios", "Agenda", "Clientas", "FAQ", "Contacto"].map(
            (link, idx) => (
              <a
                key={idx}
                href={`#${link.toLowerCase()}`}
                className="px-4 py-2 text-neutral-500 transition-colors hover:text-neutral-950 hover:underline"
              >
                {link}
              </a>
            ),
          )}
        </nav>
      </MainLayout>
    </>
  );
}
