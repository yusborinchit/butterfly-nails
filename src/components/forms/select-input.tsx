import { useId } from "react";

interface Props {
  label: string;
  name: string;
  options: string[];
}

export default function SelectInput(props: Readonly<Props>) {
  const id = useId();

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-sm font-bold">
        {props.label}
      </label>
      <select id={id} name={props.name} className="rounded border-neutral-500">
        {props.options.map((option) => (
          <option key={option} value={option} className="p-2">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
