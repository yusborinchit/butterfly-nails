import { useId } from "react";

interface Props {
  label: string;
  name: string;
  placeholder: string;
}

export default function TextareaInput(props: Readonly<Props>) {
  const id = useId();

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-sm font-bold">
        {props.label}
      </label>
      <textarea
        id={id}
        required
        maxLength={364}
        name={props.name}
        rows={5}
        placeholder={props.placeholder}
        className="rounded border-neutral-400 placeholder:text-neutral-500"
      ></textarea>
    </div>
  );
}
