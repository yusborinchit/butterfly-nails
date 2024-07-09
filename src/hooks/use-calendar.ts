"use client";

import dayjs from "dayjs";
import { useState } from "react";

export function useCalendar() {
  const [date, setDate] = useState(new Date());

  return {
    date,
    setDate,
    currentDate: new Date(),
    maxDate: dayjs().add(4, "months").toDate(),
  };
}
