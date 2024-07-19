"use client";

import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <motion.img
      initial={{ opacity: 0, translateY: "10rem" }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      src="/hero.webp"
      alt=""
      className="h-full w-1/3 object-contain md:object-bottom"
    />
  );
}
