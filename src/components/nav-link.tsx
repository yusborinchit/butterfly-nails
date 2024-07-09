import { type PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  href: string;
}

export default function NavLink(props: Readonly<Props>) {
  return (
    <a
      href={props.href}
      className="px-4 py-2 text-neutral-500 transition-colors hover:text-neutral-950 hover:underline"
    >
      {props.children}
    </a>
  );
}
