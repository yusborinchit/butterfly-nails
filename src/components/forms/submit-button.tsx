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
        "grid h-fit rounded bg-neutral-950 px-6 py-3 font-bold text-white disabled:bg-neutral-600",
        props.className,
      )}
    >
      {pending ? "Cargando..." : props.children}
    </button>
  );
}
