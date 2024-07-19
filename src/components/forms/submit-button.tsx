import { type PropsWithChildren } from "react";
import { useFormStatus } from "react-dom";
import { twMerge } from "tailwind-merge";
import SpinnerIcon from "../icons/spinner-icon";

interface Props extends PropsWithChildren {
  disabled?: boolean;
  className?: string;
}

export default function SubmitButton(props: Readonly<Props>) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending || props.disabled}
      className={twMerge(
        "inline-flex justify-center rounded-md bg-text px-6 py-4 text-base/5 font-bold text-white transition-transform hover:-translate-y-1 disabled:bg-neutral-500",
        props.className,
      )}
    >
      {pending && <SpinnerIcon className="mr-3 size-5" />}
      {pending ? "Cargando..." : props.children}
    </button>
  );
}
