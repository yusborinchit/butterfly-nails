"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  title: string;
  description: string;
  price: string;
}

export default function ServiceCard(props: Readonly<Props>) {
  return (
    <motion.article
      initial={{ opacity: 0, translateY: "4rem" }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: ".75" }}
      viewport={{ once: true, amount: 0.3 }}
      className="group relative grid overflow-hidden rounded-xl lg:first:mb-12 lg:last:mb-12 lg:[&:nth-child(2)]:mb-0 lg:[&:nth-child(2)]:mt-12 lg:[&:nth-child(3)]:mb-0 lg:[&:nth-child(3)]:mt-12"
    >
      <div className="relative h-full w-full overflow-hidden rounded-t-xl before:absolute before:inset-0 before:h-full before:w-full before:bg-gradient-to-t before:from-white before:via-transparent">
        <Image
          width={300}
          height={320}
          src={props.src}
          alt={props.alt}
          className="-z-10 h-full min-h-[260px] w-full object-cover lg:min-h-[320px]"
        />
      </div>
      <div className="absolute inset-0 z-10 flex h-full w-full flex-col gap-4 bg-white p-8 opacity-0 transition-opacity group-hover:opacity-100">
        <h3
          aria-hidden
          className="text-3xl font-semibold leading-[1] tracking-tighter underline decoration-accent decoration-[3px] underline-offset-[3px]"
        >
          {props.title}.
        </h3>
        <p className="text-base/6 opacity-75">{props.description}</p>
        <p aria-hidden className="text mt-auto font-medium">
          <span className="rounded bg-accent/30 px-3 py-1">Precio:</span>
          <span className="ml-2">{props.price}.</span>
        </p>
      </div>
      <footer className="flex flex-col gap-4 bg-white p-8">
        <h3 className="text-2xl font-semibold leading-[0.85] tracking-tighter">
          {props.title}.
        </h3>
        <p className="text font-medium">
          <span className="rounded bg-accent/30 px-3 py-1">Precio:</span>
          <span className="ml-2">{props.price}.</span>
        </p>
      </footer>
    </motion.article>
  );
}
