import { useId } from "react";

interface Props {
  label: string;
  name: string;
  placeholder: string;
}

export default function TextInput(props: Readonly<Props>) {
  const id = useId();

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-sm font-bold">
        {props.label}
      </label>
      <input
        id={id}
        name={props.name}
        type="text"
        placeholder={props.placeholder}
        className="rounded border-neutral-500 placeholder:text-neutral-500"
      />
    </div>
  );
}
