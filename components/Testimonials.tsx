"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="container-xl py-20">
      <p className="section-label">Testimonials</p>
      <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">What people say</h2>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="card p-6"
          >
            <Quote size={22} className="text-accent/30" />
            <blockquote className="mt-2 text-steel dark:text-mist">"{t.quote}"</blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full bg-navy/10 dark:bg-white/10">
                <Image src={t.photo} alt={t.name} fill className="object-cover" />
              </div>
              <div>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-mist">{t.role}</p>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
