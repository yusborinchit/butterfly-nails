import { useEffect, useState } from "react";
import { type Booking } from "~/types";

export function useFilter(allBookings: Booking[]) {
  const [bookings, setBookings] = useState(allBookings.slice(0, 8));
  const [filters, setFilters] = useState({
    page: 0,
    search: "",
  });

  useEffect(() => {
    const { page, search } = filters;

    if (search !== "") {
      setBookings(allBookings.filter(({ ci }) => ci.startsWith(search)));
      setFilters((p) => ({ ...p, page: 0 }));
    } else {
      setBookings(allBookings.slice(page * 8, page * 8 + 8));
    }
  }, [filters, allBookings]);

  function changeSearch(search: string) {
    setFilters((p) => ({ ...p, search }));
  }

  function prevPage() {
    setFilters((p) => ({
      ...p,
      page: p.page - 1 < 0 ? 0 : p.page - 1,
    }));
  }

  function nextPage() {
    setFilters((p) => ({
      ...p,
      page: p.page + 1,
    }));
  }

  return {
    bookings,
    page: filters.page,
    search: filters.search,
    changeSearch,
    prevPage,
    nextPage,
  };
}
