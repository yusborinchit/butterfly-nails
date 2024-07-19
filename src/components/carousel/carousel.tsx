"use client";

import { useEffect } from "react";
import { useCarousel } from "~/hooks/use-carousel";
import CarouselController from "./carousel-controller";
import CarouselImage from "./carousel-image";

interface Props {
  images: string[];
}

export default function Carousel(props: Readonly<Props>) {
  const { containerRef, scrollTo } = useCarousel();

  useEffect(() => scrollTo("right"), [scrollTo]);

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="no-scrollbar relative flex snap-x snap-mandatory gap-6 overflow-scroll scroll-smooth px-[max(calc((100vw-1200px+2rem)/2),2rem)] pb-6 pt-8"
      >
        {props.images.map((img) => (
          <CarouselImage
            key={img}
            containerRef={containerRef}
            src={img}
            alt="Una foto de las uñas de una clienta."
          />
        ))}
      </div>
      <div className="pointer-events-none absolute top-1/2 w-full -translate-y-1/2">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-12 sm:px-10">
          <CarouselController
            direction="left"
            handleClick={() => scrollTo("left")}
          />
          <CarouselController
            direction="right"
            handleClick={() => scrollTo("right")}
          />
        </div>
      </div>
    </div>
  );
}
