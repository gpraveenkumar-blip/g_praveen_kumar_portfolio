"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-10 max-w-2xl"
    >
      <p className="section-label">{eyebrow}</p>
      <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">{title}</h2>
      {description && <p className="mt-3 text-steel dark:text-mist">{description}</p>}
    </motion.div>
  );
}
