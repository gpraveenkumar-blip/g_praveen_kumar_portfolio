"use client";

import { motion } from "framer-motion";
import { Trophy, Code2, FlaskConical, BookOpen, Medal } from "lucide-react";
import { achievements } from "@/lib/data";

const blocks = [
  { icon: Code2, title: "Coding", items: achievements.coding },
  { icon: Trophy, title: "Hackathons", items: achievements.hackathons.map((h) => `${h.name} — ${h.result}`) },
  { icon: FlaskConical, title: "Competitions", items: achievements.competitions },
  { icon: BookOpen, title: "Research & Publications", items: [...achievements.research, ...achievements.publications.map((p) => p.title)] }
];

export default function Achievements() {
  return (
    <section id="achievements" className="container-xl py-20">
      <p className="section-label">Achievements</p>
      <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">Wins worth mentioning</h2>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {blocks.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="card p-6"
          >
            <div className="flex items-center gap-2 text-accent">
              <b.icon size={18} />
              <h3 className="font-display font-semibold">{b.title}</h3>
            </div>
            <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-steel dark:text-mist">
              {b.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <span className="flex items-center gap-1.5 text-sm font-semibold text-mist">
          <Medal size={16} className="text-accent" /> Badges:
        </span>
        {achievements.badges.map((badge) => (
          <span key={badge} className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">{badge}</span>
        ))}
      </div>
    </section>
  );
}
