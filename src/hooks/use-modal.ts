import { useState } from "react";
import { type Booking } from "~/types";

export function useModal() {
  const [modal, setModal] = useState({
    booking: undefined as Booking | undefined,
    isOpen: false,
  });

  function toggleModal() {
    setModal((p) => ({ ...p, isOpen: !p.isOpen }));
  }

  function openModal(booking: Booking) {
    setModal((p) => ({ isOpen: !p.isOpen, booking }));
  }

  return { modal, toggleModal, openModal };
}
