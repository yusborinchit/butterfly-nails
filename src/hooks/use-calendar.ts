"use client";

import dayjs from "dayjs";
import { useMemo, useState } from "react";
import { type Booking, type ChangeDateValue } from "~/types";
import { getDateTurns } from "~/utils/get-date-turns";

export function useCalendar(bookings: Booking[]) {
  const [date, setDate] = useState(new Date());

  const { dateTurns, isDateAvailable } = useMemo(() => {
    return getDateTurns(date, bookings);
  }, [date, bookings]);

  function handleDateChange(value: ChangeDateValue) {
    setDate(value as Date);
  }

  return {
    date,
    handleDateChange,
    currentDate: new Date(),
    maxDate: dayjs().add(4, "months").toDate(),
    dateTurns,
    isDateAvailable,
  };
}
