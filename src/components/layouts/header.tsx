"use client";

import Image from "next/image";
import { useState } from "react";
import MenuIcon from "../icons/menu-icon";
import NavLink from "../nav-link";
import MainLayout from "./main-layout";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        data-open={isOpen}
        className="pointer-events-none fixed inset-0 z-30 h-screen w-screen bg-black bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity data-[open=true]:opacity-100 sm:hidden"
      ></div>
      <div className="sticky left-0 top-0 z-30 bg-white">
        <MainLayout as="header" className="flex h-[72px] items-center py-2">
          <a href="#">
            <Image
              src="/bn-logo.png"
              width={44}
              height={44}
              alt="El logo de Butterfly Nails."
              className="z-30 h-11 w-11 rounded-full"
            />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="z-50 ml-auto sm:hidden"
          >
            <MenuIcon className="h-11 w-11" />
          </button>
          <nav
            data-open={isOpen}
            className="ml-auto hidden items-center data-[open=true]:absolute data-[open=true]:left-0 data-[open=true]:top-[72px] data-[open=true]:flex data-[open=true]:w-screen data-[open=false]:flex-row data-[open=true]:flex-col data-[open=true]:bg-white data-[open=true]:pb-4 sm:flex sm:flex-row sm:data-[open=true]:relative sm:data-[open=true]:top-0 sm:data-[open=true]:w-auto sm:data-[open=true]:flex-row sm:data-[open=true]:py-0"
          >
            <NavLink href="#">Inicio</NavLink>
            <NavLink href="#servicios">Servicios</NavLink>
            <NavLink href="#clientas">Clientas</NavLink>
            <NavLink href="#garantia">Garantía</NavLink>
            <NavLink href="#agenda">Agenda</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
          </nav>
        </MainLayout>
      </div>
    </>
  );
}
