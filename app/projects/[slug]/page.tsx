import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, Github, ExternalLink, FileText, PlayCircle } from "lucide-react";
import { projects } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return { title: `${project.title} — Project Details`, description: project.summary };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <>
      <Navbar />
      <main id="main-content" className="container-xl py-14">
        <Link href="/#projects" className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
          <ArrowLeft size={14} /> Back to projects
        </Link>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span key={t} className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
              {t}
            </span>
          ))}
        </div>
        <h1 className="mt-3 font-display text-3xl font-bold sm:text-4xl">{project.title}</h1>
        <p className="mt-3 max-w-2xl text-lg text-steel dark:text-mist">{project.summary}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <Github size={16} /> GitHub
            </a>
          )}
          {project.liveDemoUrl && (
            <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
          {project.demoVideo && (
            <a href={project.demoVideo} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <PlayCircle size={16} /> Demo Video
            </a>
          )}
          {project.reportUrl && (
            <a href={project.reportUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <FileText size={16} /> Project Report
            </a>
          )}
        </div>

        <div className="relative mt-10 aspect-video overflow-hidden rounded-2xl bg-navy/5 dark:bg-white/5">
          <Image src={project.image} alt={project.title} fill className="object-cover" priority />
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {project.metrics.map((m) => (
            <div key={m.label} className="card p-4 text-center">
              <p className="font-display text-2xl font-bold text-accent">{m.value}</p>
              <p className="mt-1 text-xs text-mist">{m.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-lg font-semibold">Problem statement</h2>
            <p className="mt-2 leading-relaxed text-steel dark:text-mist">{project.problem}</p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold">Solution</h2>
            <p className="mt-2 leading-relaxed text-steel dark:text-mist">{project.solution}</p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="font-display text-lg font-semibold">Key features</h2>
          <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {project.features.map((f) => (
              <li key={f} className="card px-4 py-3 text-sm">{f}</li>
            ))}
          </ul>
        </div>

        <div className="mt-10">
          <h2 className="font-display text-lg font-semibold">Tech stack</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.techStack.map((t) => (
              <span key={t} className="rounded-full bg-navy/5 px-3 py-1.5 text-sm font-medium dark:bg-white/10">{t}</span>
            ))}
          </div>
        </div>

        {project.architectureImage && (
          <div className="mt-10">
            <h2 className="font-display text-lg font-semibold">Architecture</h2>
            <div className="relative mt-3 aspect-[16/9] overflow-hidden rounded-2xl bg-navy/5 dark:bg-white/5">
              <Image src={project.architectureImage} alt={`${project.title} architecture diagram`} fill className="object-contain" />
            </div>
          </div>
        )}

        {project.screenshots.length > 0 && (
          <div className="mt-10">
            <h2 className="font-display text-lg font-semibold">Screenshots</h2>
            <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {project.screenshots.map((src) => (
                <div key={src} className="relative aspect-video overflow-hidden rounded-xl bg-navy/5 dark:bg-white/5">
                  <Image src={src} alt={`${project.title} screenshot`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-10">
          <h2 className="font-display text-lg font-semibold">Future improvements</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-steel dark:text-mist">
            {project.futureImprovements.map((f) => <li key={f}>{f}</li>)}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
