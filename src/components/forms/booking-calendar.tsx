import { type Dispatch, type SetStateAction } from "react";
import Calendar from "react-calendar";

interface Props {
  date: Date;
  currentDate: Date;
  maxDate: Date;
  setDate: Dispatch<SetStateAction<Date>>;
}

export default function BookingCalendar(props: Readonly<Props>) {
  return (
    <div>
      <label className="text-sm font-bold">Fecha:</label>
      <Calendar
        locale="es"
        defaultValue={props.date}
        onChange={(value) => props.setDate(value as Date)}
        minDate={props.currentDate}
        maxDate={props.maxDate}
        minDetail="month"
        maxDetail="month"
        prevLabel="<"
        nextLabel=">"
        tileClassName={({ date }) => (date.getDay() === 0 ? "red-tiles" : "")}
        className="react-calendar"
      />
    </div>
  );
}
