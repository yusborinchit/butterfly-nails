import { type PropsWithChildren, useId } from "react";

interface Props extends PropsWithChildren {
  label: string;
  name: string;
}

export default function SelectInput(props: Readonly<Props>) {
  const id = useId();

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-sm font-bold">
        {props.label}
      </label>
      <select id={id} name={props.name} className="rounded border-neutral-500">
        {props.children}
      </select>
    </div>
  );
}
