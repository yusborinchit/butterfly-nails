import dayjs from "dayjs";
import { type Booking } from "~/types";
import OptionsIcon from "../icons/options-icon";

interface Props {
  booking: Booking;
  changeModalBooking: () => void;
  toggleOpen: () => void;
}

export default function BookingTableRow(props: Readonly<Props>) {
  const { booking } = props;

  function handleToggleModal() {
    props.changeModalBooking();
    props.toggleOpen();
  }

  return (
    <tr key={booking.id} className="odd:bg-neutral-100">
      <td className="px-4 py-3.5 font-semibold">
        {dayjs(booking.date).format("DD/MM/YYYY")}
      </td>
      <td className="px-4 py-3.5">{booking.time}</td>
      <td className="px-4 py-3.5">{booking.ci}</td>
      <td className="px-4 py-3.5">{booking.name}</td>
      <td className="px-4 py-3.5">{booking.username}</td>
      <td className="px-4 py-3.5">{booking.service}</td>
      <td
        data-state={booking.state}
        className="px-4 py-3.5 text-center font-bold data-[state=Aprobado]:bg-green-200 data-[state=Pendiente]:bg-amber-100 data-[state=Aprobado]:text-green-600 data-[state=Pendiente]:text-amber-600"
      >
        {booking.state}
      </td>
      <td className="aspect-square p-2">
        <button onClick={handleToggleModal} className="mx-auto flex w-min">
          <OptionsIcon className="h-6 w-6" />
        </button>
      </td>
    </tr>
  );
}
