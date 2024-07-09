import { type PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends PropsWithChildren {
  name: string;
  value: string;
  disabled: boolean;
  className?: string;
}

export default function SubmitButton(props: Readonly<Props>) {
  return (
    <button
      type="submit"
      name={props.name}
      value={props.value}
      disabled={props.disabled}
      className={twMerge(
        "mt-auto grid h-fit rounded bg-neutral-950 px-6 py-3 font-bold text-white disabled:bg-neutral-600 md:w-fit",
        props.className,
      )}
    >
      {props.children}
    </button>
  );
}
