"use client";

import { motion } from "framer-motion";
import DownArrowIcon from "../icons/down-arrow-icon";

interface Props {
  question: string;
  answer: string;
  enterLeft: boolean;
  isOpen: boolean;
}

export default function QuestionCard(props: Readonly<Props>) {
  return (
    <motion.details
      {...(props.isOpen ? { open: true } : {})}
      initial={{ opacity: 0, translateX: props.enterLeft ? "-4rem" : "4rem" }}
      whileInView={{ opacity: 1, translateX: 0 }}
      transition={{ duration: ".75" }}
      viewport={{ once: true, amount: 0.3 }}
      className="group overflow-hidden rounded-lg bg-white [&_summary::-webkit-details-marker]:hidden"
    >
      <summary className="flex cursor-pointer items-center justify-between gap-4 rounded-lg bg-gray-50 p-8 text-gray-900">
        <h2 className="text-2xl font-semibold leading-[1] tracking-tighter">
          {props.question}
        </h2>
        <DownArrowIcon className="size-7 shrink-0 transition group-open:-rotate-180" />
      </summary>
      <p className="-mt-4 px-8 pb-8 text-base/6 opacity-75">{props.answer}</p>
    </motion.details>
  );
}
