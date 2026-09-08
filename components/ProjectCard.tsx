"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { Project } from "@/lib/data";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.06 }}
      className="card group flex flex-col overflow-hidden"
    >
      <Link href={`/projects/${project.slug}`} className="relative block aspect-video overflow-hidden bg-navy/5 dark:bg-white/5">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span key={t} className="rounded-full bg-accent/10 px-2.5 py-0.5 text-[11px] font-medium text-accent">
              {t}
            </span>
          ))}
        </div>
        <h3 className="mt-3 font-display text-lg font-semibold">
          <Link href={`/projects/${project.slug}`} className="hover:text-accent">
            {project.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-steel dark:text-mist">{project.summary}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.metrics.slice(0, 2).map((m) => (
            <span key={m.label} className="rounded-md bg-navy/5 px-2 py-1 text-xs dark:bg-white/10">
              <span className="text-mist">{m.label}: </span>
              <span className="font-semibold text-signal">{m.value}</span>
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-navy/10 pt-4 text-sm dark:border-white/10">
          <Link href={`/projects/${project.slug}`} className="flex items-center gap-1 font-semibold text-accent">
            Details <ArrowUpRight size={14} />
          </Link>
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub repo" className="text-mist hover:text-accent">
                <Github size={16} />
              </a>
            )}
            {project.liveDemoUrl && (
              <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" aria-label="Live demo" className="text-mist hover:text-accent">
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
