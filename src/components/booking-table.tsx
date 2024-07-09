import dayjs from "dayjs";
import { type Booking } from "~/types";

interface Props {
  bookings: Booking[];
  emptyMessage: string;
}

export default function BookingTable(props: Readonly<Props>) {
  return (
    <>
      {props.bookings.length > 0 ? (
        <ul className="grid gap-4">
          {props.bookings.map((booking) => (
            <li
              key={booking.id}
              className="rounded border border-neutral-500 bg-neutral-200 p-4 text-neutral-500"
            >
              <pre className="whitespace-break-spaces">
                {JSON.stringify(
                  {
                    ci: booking.ci,
                    date: dayjs(booking.date).format("DD/MM/YYYY"),
                    time: booking.time,
                    service: booking.service,
                  },
                  null,
                )}
              </pre>
            </li>
          ))}
        </ul>
      ) : (
        <div className="rounded border border-neutral-500 bg-neutral-200 p-4 text-neutral-500">
          {props.emptyMessage}
        </div>
      )}
    </>
  );
}
