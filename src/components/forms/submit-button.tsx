import { type PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends PropsWithChildren {
  disabled: boolean;
  className?: string;
}

export default function SubmitButton(props: Readonly<Props>) {
  return (
    <button
      type="submit"
      disabled={props.disabled}
      className={twMerge(
        "mt-4 grid h-fit rounded bg-neutral-950 px-6 py-3 font-bold text-white disabled:bg-neutral-600",
        props.className,
      )}
    >
      {props.children}
    </button>
  );
}
