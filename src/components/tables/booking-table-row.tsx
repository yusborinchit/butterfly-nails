import dayjs from "dayjs";
import { type Booking } from "~/types";
import OptionsIcon from "../icons/options-icon";

interface Props {
  booking: Booking;
  openModal: () => void;
}

export default function BookingTableRow(props: Readonly<Props>) {
  const { booking } = props;

  function handleToggleModal() {
    props.openModal();
  }

  return (
    <tr key={booking.id} className="odd:bg-white even:bg-neutral-200">
      <td className="px-5 py-4 font-semibold">
        {dayjs(booking.date).format("DD/MM/YYYY")}
      </td>
      <td className="px-5 py-4">{booking.time}</td>
      <td className="px-5 py-4">{booking.ci}</td>
      <td className="px-5 py-4">{booking.name}</td>
      <td className="px-5 py-4">@{booking.username}</td>
      <td className="px-5 py-4">{booking.service}</td>
      <td className="px-5 py-4 text-center">
        <span
          data-state={booking.state}
          className="rounded p-2 data-[state=Aprobado]:bg-green-600 data-[state=Pendiente]:bg-amber-500 data-[state=Aprobado]:text-white data-[state=Pendiente]:text-white"
        >
          {booking.state}
        </span>
      </td>
      <td className="aspect-square p-2">
        <button onClick={handleToggleModal} className="mx-auto flex w-min">
          <OptionsIcon className="h-6 w-6" />
        </button>
      </td>
    </tr>
  );
}
