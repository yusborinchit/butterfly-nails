import { type PropsWithChildren } from "react";
import { useFormStatus } from "react-dom";
import { twMerge } from "tailwind-merge";

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
        "bg-text inline-flex justify-center rounded-md px-6 py-4 text-base/5 font-bold text-white transition-transform hover:-translate-y-1 disabled:grayscale",
        props.className,
      )}
    >
      {pending ? "Cargando..." : props.children}
    </button>
  );
}
