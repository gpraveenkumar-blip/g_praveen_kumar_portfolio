"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Languages, Heart } from "lucide-react";
import { about, profile } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="container-xl py-20">
      <p className="section-label">About</p>
      <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">Who I am, quickly</h2>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-lg leading-relaxed text-steel dark:text-mist">{about.summary}</p>
          <p className="mt-4 leading-relaxed text-steel dark:text-mist">{about.objective}</p>
          <p className="mt-4 italic leading-relaxed text-mist">"{about.passion}"</p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { icon: MapPin, label: "Location", value: profile.location },
              { icon: Clock, label: "Status", value: about.currentStatus.split("/")[0] },
              { icon: Languages, label: "Languages", value: `${profile.languages.length}` },
              { icon: Heart, label: "Interests", value: profile.interests[0] }
            ].map((item) => (
              <div key={item.label} className="card p-4">
                <item.icon size={16} className="text-accent" />
                <p className="mt-2 text-xs text-mist">{item.label}</p>
                <p className="text-sm font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education timeline */}
        <div>
          <h3 className="font-display text-lg font-semibold">Education</h3>
          <ol className="mt-5 space-y-6 border-l border-navy/10 pl-6 dark:border-white/10">
            {about.education.map((ed, i) => (
              <motion.li
                key={ed.degree}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="relative"
              >
                <span className="absolute -left-[27px] top-1.5 h-3 w-3 rounded-full bg-grad-accent" />
                <p className="text-xs font-mono text-accent">{ed.duration}</p>
                <p className="mt-1 font-semibold">{ed.degree}</p>
                <p className="text-sm text-mist">{ed.institution} · {ed.cgpa}</p>
                <p className="mt-1 text-xs text-mist">{ed.coursework.join(" · ")}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
