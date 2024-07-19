"use client";

import { motion } from "framer-motion";
import { type PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends PropsWithChildren {
  title: string;
  className?: string;
}

export default function GuarantyCard(props: Readonly<Props>) {
  return (
    <motion.article
      initial={{ opacity: 0, translateY: "2rem" }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: ".75" }}
      viewport={{ once: true, amount: 0.3 }}
      className={twMerge(
        "bg-secondary rounded-xl px-8 py-10 [&>p]:mt-4 [&>p]:text-base/6 [&>p]:opacity-75",
        props.className,
      )}
    >
      <h3 className="text-3xl font-semibold leading-[1] tracking-tighter">
        {props.title}
      </h3>
      {props.children}
    </motion.article>
  );
}
