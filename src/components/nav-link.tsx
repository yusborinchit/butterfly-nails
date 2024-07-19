import { type PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  href: string;
}

export default function NavLink(props: Readonly<Props>) {
  return (
    <a
      href={props.href}
      className="p-4 text-text transition-colors hover:underline"
    >
      {props.children}
    </a>
  );
}
