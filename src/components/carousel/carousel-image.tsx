"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Props {
  containerRef: React.MutableRefObject<HTMLDivElement | null>;
  src: string;
  alt: string;
}

export default function CarouselImage(props: Readonly<Props>) {
  const imageRef = useRef<HTMLImageElement | null>(null);

  const isInView = useInView(imageRef, {
    root: props.containerRef,
    amount: "all",
  });

  return (
    <motion.img
      ref={imageRef}
      src={props.src}
      alt={props.alt}
      animate={{
        opacity: isInView ? 1 : 0.45,
      }}
      className="h-[400px] w-[320px] shrink-0 origin-center snap-center rounded-xl object-cover transition-all duration-200"
    />
  );
}
