import { type ElementType, type PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends PropsWithChildren {
  id?: string;
  as?: ElementType;
  className?: string;
}

export default function MainLayout(props: Readonly<Props>) {
  const Component = props.as ?? "div";

  return (
    <Component
      id={props.id}
      className={twMerge("mx-auto max-w-[1200px] px-8", props.className)}
    >
      {props.children}
    </Component>
  );
}
