"use client";

import { useState } from "react";
import { type Booking } from "~/types";
import Modal from "./booking-modal";
import BookingTableRow from "./booking-table-row";

interface Props {
  headers: string[];
  bookings: Booking[];
  emptyMessage: string;
}

export default function BookingTable(props: Readonly<Props>) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalBooking, setModalBooking] = useState(props.bookings[0]);

  return (
    <>
      {modalBooking && (
        <Modal
          booking={modalBooking}
          isOpen={isOpen}
          toggleOpen={() => setIsOpen((prev) => !prev)}
        />
      )}
      <div className="relative overflow-auto">
        <table className="w-full text-sm">
          <thead className="sticky inset-0">
            <tr>
              {props.headers.map((header) => (
                <th
                  key={header}
                  className="bg-neutral-950 p-4 text-start text-base font-bold uppercase text-white first:rounded-tl-lg last:rounded-tr-lg"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-300 text-neutral-500">
            {props.bookings.length > 0 ? (
              props.bookings.map((booking) => (
                <BookingTableRow
                  key={booking.id}
                  booking={booking}
                  changeModalBooking={() => setModalBooking(booking)}
                  toggleOpen={() => setIsOpen((prev) => !prev)}
                />
              ))
            ) : (
              <tr>
                <td
                  colSpan={8}
                  className="bg-neutral-200 p-4 text-center text-2xl font-semibold uppercase tracking-tighter text-neutral-400"
                >
                  {props.emptyMessage}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
