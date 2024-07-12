"use client";

import { useId } from "react";

interface Props {
  placeholder: string;
  search: string;
  changeSearch: (search: string) => void;
}

export default function SearchInput(props: Readonly<Props>) {
  const id = useId();

  return (
    <input
      id={id}
      type="text"
      value={props.search}
      onChange={(e) => props.changeSearch(e.target.value)}
      placeholder={props.placeholder}
      className="w-full rounded border-neutral-400 placeholder:text-neutral-500 sm:ml-auto sm:w-auto"
    />
  );
}
