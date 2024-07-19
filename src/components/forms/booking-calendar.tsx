import dayjs from "dayjs";
import { useMemo } from "react";
import Calendar, { type TileArgs } from "react-calendar";
import { type Booking, type ChangeDateValue } from "~/types";
import { getFullDates } from "~/utils/get-full-dates";

interface Props {
  bookings: Booking[];
  date: Date;
  handleDateChange: (value: ChangeDateValue) => void;
  currentDate: Date;
  maxDate: Date;
}

export default function BookingCalendar(props: Readonly<Props>) {
  const fullDates = useMemo(() => {
    return getFullDates(props.bookings);
  }, [props.bookings]);

  function handleTileClassName({ date }: TileArgs) {
    return dayjs(date).day() === 0 ||
      fullDates.includes(dayjs(date).format("YYYY-MM-DD"))
      ? "red-tiles"
      : "";
  }

  return (
    <Calendar
      locale="es"
      defaultValue={props.date}
      onChange={props.handleDateChange}
      minDate={props.currentDate}
      maxDate={props.maxDate}
      minDetail="month"
      maxDetail="month"
      prevLabel="<"
      nextLabel=">"
      tileClassName={handleTileClassName}
      className="react-calendar col-span-full"
    />
  );
}
