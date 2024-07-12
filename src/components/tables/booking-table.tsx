"use client";

import { useFilter } from "~/hooks/use-filter";
import { useModal } from "~/hooks/use-modal";
import { type Booking } from "~/types";
import SearchInput from "../forms/search-input";
import Modal from "./booking-modal";
import BookingTableBody from "./booking-table-body";
import BookingTableHeader from "./booking-table-header";
import Pagination from "./pagination";

interface Props {
  title: string;
  hasSearch: boolean;
  hasPagination: boolean;
  bookings: Booking[];
  emptyMessage: string;
}

export default function BookingTable(props: Readonly<Props>) {
  const { modal, openModal, toggleModal } = useModal();
  const { bookings, page, search, changeSearch, prevPage, nextPage } =
    useFilter(props.bookings);

  return (
    <>
      {modal.booking && (
        <Modal
          booking={modal.booking}
          isOpen={modal.isOpen}
          toggleOpen={toggleModal}
        />
      )}
      <header className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <h2 className="min-w-fit text-center text-3xl font-bold -tracking-[0.075em] sm:text-start">
          {props.title}
        </h2>
        {props.hasSearch && (
          <SearchInput
            search={search}
            changeSearch={changeSearch}
            placeholder="Ingresa la CI aquí..."
          />
        )}
      </header>
      <div className="relative overflow-auto rounded-lg">
        <table className="w-full text-sm">
          <BookingTableHeader />
          <BookingTableBody
            bookings={bookings}
            emptyMessage={props.emptyMessage}
            openModal={openModal}
          />
        </table>
      </div>
      {props.hasPagination && (
        <Pagination page={page} prevPage={prevPage} nextPage={nextPage} />
      )}
    </>
  );
}
