"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Award } from "lucide-react";
import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section id="certifications" className="bg-paperDim py-20 dark:bg-navy/40">
      <div className="container-xl">
        <p className="section-label">Certifications</p>
        <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">Verified credentials</h2>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.name}
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
              className="card group block overflow-hidden"
            >
              <div className="relative aspect-[4/3] bg-navy/5 dark:bg-white/5">
                <Image src={cert.image} alt={cert.name} fill className="object-cover" />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-1.5 text-xs text-mist">
                  <Award size={12} /> {cert.organization}
                </div>
                <h3 className="mt-1.5 text-sm font-semibold leading-snug">{cert.name}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-xs text-mist">{cert.issueDate}</span>
                  <ExternalLink size={13} className="text-mist group-hover:text-accent" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
