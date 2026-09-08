"use client";

import { motion } from "framer-motion";
import { recruiterSnapshot, skillsMatrix, whyHireMe, careerTimeline } from "@/lib/data";
import { Star, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

function AnimatedCounter({ value }: { value: string }) {
  const numeric = parseFloat(value);
  const suffix = value.replace(/[0-9.]/g, "");
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isNaN(numeric)) return;
    let frame: number;
    const start = performance.now();
    const duration = 900;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplay(Math.floor(progress * numeric));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [numeric]);

  if (isNaN(numeric)) return <>{value}</>;
  return <>{display}{suffix}</>;
}

export default function RecruiterDashboard() {
  const snapshotItems = [
    { label: "Experience", value: recruiterSnapshot.yearsExperience },
    { label: "Projects", value: recruiterSnapshot.projectsCompleted },
    { label: "Certifications", value: recruiterSnapshot.certifications },
    { label: "Status", value: recruiterSnapshot.currentStatus.split("/")[0].trim() }
  ];

  return (
    <section id="recruiter" className="container-xl py-20">
      <p className="section-label">For Recruiters</p>
      <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">Everything you need in one scroll</h2>
      <p className="mt-3 max-w-2xl text-steel dark:text-mist">
        A quick snapshot so you don't have to dig through the full page — expand any section above for the details.
      </p>

      {/* Profile snapshot counters */}
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {snapshotItems.map((item) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-5 text-center"
          >
            <p className="font-display text-3xl font-bold text-accent">
              <AnimatedCounter value={item.value} />
            </p>
            <p className="mt-1 text-xs text-mist">{item.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
        {/* Skills matrix */}
        <div>
          <h3 className="font-display text-lg font-semibold">Skills matrix</h3>
          <div className="mt-4 space-y-3">
            {skillsMatrix.map((s) => (
              <div key={s.label} className="flex items-center justify-between text-sm">
                <span className="text-steel dark:text-mist">{s.label}</span>
                <span className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < s.rating ? "fill-accent text-accent" : "text-navy/15 dark:text-white/15"}
                    />
                  ))}
                </span>
              </div>
            ))}
          </div>

          <h3 className="mt-10 font-display text-lg font-semibold">Why hire me</h3>
          <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {whyHireMe.map((w) => (
              <div key={w.title} className="card flex items-start gap-2 p-3">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-signal" />
                <div>
                  <p className="text-sm font-semibold">{w.title}</p>
                  <p className="text-xs text-mist">{w.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career timeline */}
        <div>
          <h3 className="font-display text-lg font-semibold">Career journey</h3>
          <ol className="relative mt-4 space-y-6 border-l border-navy/10 pl-6 dark:border-white/10">
            {careerTimeline.map((t, i) => (
              <motion.li
                key={t.year}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="relative"
              >
                <span className="absolute -left-[27px] top-1 h-3 w-3 rounded-full bg-grad-accent" />
                <p className="font-mono text-xs text-accent">{t.year}</p>
                <p className="font-semibold">{t.title}</p>
                <p className="text-sm text-mist">{t.description}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
