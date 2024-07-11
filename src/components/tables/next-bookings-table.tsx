"use client";

import { useEffect, useState } from "react";
import { type Booking } from "~/types";
import Modal from "./booking-modal";
import BookingTableRow from "./booking-table-row";
import Pagination from "./pagination";

interface Props {
  headers: string[];
  bookings: Booking[];
  emptyMessage: string;
}

export default function NextBookingsTable(props: Readonly<Props>) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalBooking, setModalBooking] = useState(props.bookings[0]);

  const [page, setPage] = useState(0);
  const [bookings, setBookings] = useState(props.bookings.slice(0, 8));

  useEffect(() => {
    setBookings(props.bookings.slice(page * 8, page * 8 + 8));
  }, [page, props.bookings]);

  return (
    <>
      {modalBooking && (
        <Modal
          booking={modalBooking}
          isOpen={isOpen}
          toggleOpen={() => setIsOpen((prev) => !prev)}
        />
      )}
      <header className="flex flex-col items-center gap-2 sm:flex-row">
        <h2 className="text-center text-3xl font-bold -tracking-[0.075em] sm:text-start">
          Turnos Próximos
        </h2>
        <Pagination
          page={page + 1}
          prevPage={() => setPage(page - 1 < 0 ? 0 : page - 1)}
          nextPage={() => setPage(page + 1)}
        />
      </header>
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
            {bookings.length > 0 ? (
              bookings.map((booking) => (
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
