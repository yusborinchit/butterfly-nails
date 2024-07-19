import { useId } from "react";

interface Props {
  label: string;
  name: string;
  options: string[];
}

export default function SelectInput(props: Readonly<Props>) {
  const id = useId();

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="block font-semibold text-text">
        <span className="text-accent"># </span>
        {props.label}
      </label>
      <select
        id={id}
        name={props.name}
        className="w-full rounded-md border-neutral-400 placeholder:text-text/75"
      >
        {props.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
