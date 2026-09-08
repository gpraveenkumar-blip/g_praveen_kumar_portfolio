"use client";

import { useEffect, useState } from "react";
import { Download, Printer, Eye } from "lucide-react";
import { profile } from "@/lib/data";

export default function Resume() {
  const [downloads, setDownloads] = useState<number | null>(null);

  useEffect(() => {
    const stored = Number(window.localStorage.getItem("resume_downloads") ?? "0");
    setDownloads(stored);
  }, []);

  const trackDownload = () => {
    const next = Number(window.localStorage.getItem("resume_downloads") ?? "0") + 1;
    window.localStorage.setItem("resume_downloads", String(next));
    setDownloads(next);
    // Optional: also POST to /api/track for a real cross-visitor count once Supabase is wired up.
    fetch("/api/track", { method: "POST", body: JSON.stringify({ event: "resume_download" }) }).catch(() => {});
  };

  return (
    <section id="resume" className="bg-paperDim py-20 dark:bg-navy/40">
      <div className="container-xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="section-label">Resume</p>
            <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">The two-minute version</h2>
          </div>
          {downloads !== null && (
            <p className="font-mono text-xs text-mist">{downloads} downloads this session</p>
          )}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href={profile.resumePdf} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <Eye size={16} /> View Resume
          </a>
          <a href={profile.resumePdf} download onClick={trackDownload} className="btn-secondary">
            <Download size={16} /> Download Resume
          </a>
          <button onClick={() => window.print()} className="btn-secondary">
            <Printer size={16} /> Print Resume
          </button>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-navy/10 shadow-card dark:border-white/10">
          <object data={profile.resumePdf} type="application/pdf" width="100%" height="640" aria-label="Embedded resume PDF">
            <p className="p-6 text-sm text-mist">
              Your browser can't display the embedded PDF. <a href={profile.resumePdf} className="font-semibold text-accent">Download it here</a> instead.
            </p>
          </object>
        </div>
      </div>
    </section>
  );
}
