import { type Booking } from "~/types";
import BookingTableRow from "./booking-table-row";

interface Props {
  bookings: Booking[];
  emptyMessage: string;
  openModal: (booking: Booking) => void;
}

export default function BookingTableBody(props: Readonly<Props>) {
  return (
    <tbody className="text-neutral-500">
      {props.bookings.length > 0 ? (
        props.bookings.map((booking) => (
          <BookingTableRow
            key={booking.id}
            booking={booking}
            openModal={() => props.openModal(booking)}
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
  );
}
