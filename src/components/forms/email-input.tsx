import { useId } from "react";

interface Props {
  label: string;
  name: string;
  placeholder: string;
}

export default function EmailInput(props: Readonly<Props>) {
  const id = useId();

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="block font-semibold text-text">
        <span className="text-accent"># </span>
        {props.label}
      </label>
      <input
        id={id}
        type="email"
        name={props.name}
        placeholder={props.placeholder}
        className="w-full rounded-md border-neutral-400 placeholder:text-text/75"
      />
    </div>
  );
}
