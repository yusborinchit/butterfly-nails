import { useRef } from "react";

export function useCarousel() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  function scrollTo(direction: "left" | "right") {
    if (!containerRef.current) return;

    const { current } = containerRef;
    const children = current.childNodes;

    const item = children[0] as HTMLDivElement;
    current.scrollBy({
      left: (direction === "left" ? -1 : 1) * (item.clientWidth + 24),
    });
  }

  return { containerRef, scrollTo };
}
