"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="bg-paperDim py-20 dark:bg-navy/40">
      <div className="container-xl">
        <p className="section-label">Skills</p>
        <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">Technical toolkit</h2>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (gi % 3) * 0.06 }}
              className="card p-6"
            >
              <h3 className="font-display text-sm font-semibold text-accent">{group.category}</h3>
              <ul className="mt-4 space-y-3">
                {group.skills.map((s) => (
                  <li key={s.name}>
                    <div className="flex items-center justify-between text-sm">
                      <span>{s.name}</span>
                      <span className="text-xs text-mist">{s.level}%</span>
                    </div>
                    <div className="progress-track mt-1.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="progress-fill"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
