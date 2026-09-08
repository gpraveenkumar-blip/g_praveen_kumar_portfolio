"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";

const allTags = ["All", ...Array.from(new Set(projects.flatMap((p) => p.tags)))];

export default function Projects() {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState("All");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesTag = tag === "All" || p.tags.includes(tag);
      const matchesQuery =
        query.trim() === "" ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.summary.toLowerCase().includes(query.toLowerCase()) ||
        p.techStack.some((t) => t.toLowerCase().includes(query.toLowerCase()));
      return matchesTag && matchesQuery;
    });
  }, [query, tag]);

  return (
    <section id="projects" className="container-xl py-20">
      <p className="section-label">Projects</p>
      <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">Featured AI projects</h2>
      <p className="mt-3 max-w-2xl text-steel dark:text-mist">
        Seven end-to-end builds spanning computer vision, NLP, and applied ML — each with a full write-up: problem, solution, architecture, and results.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-mist" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects or tech..."
            aria-label="Search projects"
            className="w-full rounded-full border border-navy/15 bg-white py-2.5 pl-9 pr-4 text-sm outline-none focus-visible:border-accent dark:border-white/15 dark:bg-navy2"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {allTags.map((t) => (
            <button
              key={t}
              onClick={() => setTag(t)}
              aria-pressed={tag === t}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
                tag === t ? "bg-grad-accent text-white" : "bg-navy/5 text-steel hover:bg-navy/10 dark:bg-white/10 dark:text-mist"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-mist">No projects match that search — try a different keyword or tag.</p>
      )}
    </section>
  );
}
