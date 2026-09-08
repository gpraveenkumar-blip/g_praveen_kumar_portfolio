"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="container-xl py-20">
      <p className="section-label">Experience</p>
      <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">Where I've worked</h2>

      <ol className="mt-10 space-y-8 border-l border-navy/10 pl-6 dark:border-white/10 sm:pl-8">
        {experience.map((exp, i) => (
          <motion.li
            key={exp.role + exp.company}
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.1, duration: 0.45 }}
            className="relative"
          >
            <span className="absolute -left-[31px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-grad-accent text-white sm:-left-[39px]">
              <Briefcase size={12} />
            </span>
            <div className="card p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-semibold">{exp.role}</h3>
                <span className="font-mono text-xs text-accent">{exp.duration}</span>
              </div>
              <p className="text-sm font-medium text-mist">{exp.company}</p>
              <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-steel dark:text-mist">
                {exp.responsibilities.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.technologies.map((t) => (
                  <span key={t} className="rounded-full bg-navy/5 px-3 py-1 text-xs font-medium dark:bg-white/10">
                    {t}
                  </span>
                ))}
              </div>
              {exp.achievements.length > 0 && (
                <p className="mt-4 text-sm font-medium text-signal">★ {exp.achievements[0]}</p>
              )}
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
