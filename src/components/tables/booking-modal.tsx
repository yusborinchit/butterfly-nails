import dayjs from "dayjs";
import { approveAction } from "~/server/actions";
import { type Booking } from "~/types";
import SubmitButton from "../forms/submit-button";
import CloseIcon from "../icons/close-icon";

interface Props {
  booking: Booking;
  isOpen: boolean;
  toggleOpen: () => void;
}

export default function Modal(props: Readonly<Props>) {
  const { booking } = props;

  async function handleApprove(formData: FormData) {
    await approveAction(formData);
    props.toggleOpen();
  }

  async function handleDelete(formData: FormData) {
    await delete formData;
    props.toggleOpen();
  }

  return (
    props.isOpen && (
      <div className="fixed inset-0 z-20 flex justify-center bg-black bg-opacity-60 backdrop-blur-sm">
        <div className="mx-8 my-4 flex h-fit w-full max-w-lg flex-col overflow-hidden rounded bg-white">
          <header className="flex items-center bg-neutral-200 p-4">
            <p className="text-xl font-bold -tracking-[0.075em]">
              Toda la información:
            </p>
            <button
              onClick={props.toggleOpen}
              className="ml-auto grid place-items-center rounded text-neutral-500"
            >
              <CloseIcon className="h-6 w-6" />
            </button>
          </header>
          <ul className="grid max-h-[400px] grid-cols-2 gap-4 overflow-y-scroll p-4">
            <li className="flex flex-col">
              <h4 className="text-sm font-bold underline">Fecha:</h4>
              <p className="text-neutral-500">
                {dayjs(booking.date).format("DD/MM/YYYY")}
              </p>
              <p className="text-neutral-500">{booking.time}</p>
            </li>
            <li className="flex flex-col gap-1">
              <h4 className="text-sm font-bold underline">Servicio:</h4>
              <p className="text-neutral-500">{booking.service}</p>
            </li>
            <li className="col-span-2 flex flex-col gap-1 sm:col-span-1">
              <h4 className="text-sm font-bold underline">Datos Personales:</h4>
              <p className="text-neutral-500">{booking.ci}</p>
              <p className="text-neutral-500">{booking.name}</p>
            </li>
            <li className="col-span-2 flex flex-col gap-1 sm:col-span-1">
              <h4 className="text-sm font-bold underline">Contacto:</h4>
              <p className="text-neutral-500">{booking.phone}</p>
              <p className="text-neutral-500">@{booking.username}</p>
            </li>
            <li className="col-span-2 flex flex-col gap-1">
              <h4 className="text-sm font-bold underline">Descripción:</h4>
              <p className="text-neutral-500">{booking.description}</p>
            </li>
          </ul>
          <footer className="flex flex-col gap-4 p-4">
            {booking.state === "Pendiente" && (
              <form action={handleApprove}>
                <input type="hidden" name="id" value={booking.id} />
                <SubmitButton className="w-full bg-green-600 px-4 py-2.5">
                  Aprobar
                </SubmitButton>
              </form>
            )}
            <form action={handleDelete}>
              <input type="hidden" name="id" value={booking.id} />
              <SubmitButton className="w-full bg-red-600 px-4 py-2.5">
                Cancelar
              </SubmitButton>
            </form>
          </footer>
        </div>
      </div>
    )
  );
}
