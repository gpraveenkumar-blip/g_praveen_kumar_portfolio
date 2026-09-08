"use client";

import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";

const quickLinks = ["About", "Skills", "Projects", "Resume", "Contact"];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-navy/10 bg-navy text-mist dark:border-white/10">
      <div className="container-xl grid grid-cols-1 gap-10 py-14 sm:grid-cols-3">
        <div>
          <p className="font-display text-lg font-bold text-paper">{profile.name}</p>
          <p className="mt-2 text-sm">{profile.titles.join(" · ")}</p>
          <div className="mt-4 flex gap-3">
            <a href={profile.social.github} aria-label="GitHub" className="hover:text-signal"><Github size={16} /></a>
            <a href={profile.social.linkedin} aria-label="LinkedIn" className="hover:text-signal"><Linkedin size={16} /></a>
            <a href={profile.social.email} aria-label="Email" className="hover:text-signal"><Mail size={16} /></a>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-paper">Quick links</p>
          <ul className="mt-3 space-y-2 text-sm">
            {quickLinks.map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="hover:text-signal">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-paper">Resume</p>
          <a href={profile.resumePdf} download className="mt-3 inline-block text-sm hover:text-signal">
            Download PDF
          </a>
        </div>
      </div>

      <div className="container-xl flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-xs sm:flex-row">
        <p>© {year} {profile.name}. All rights reserved.</p>
        <a href="#home" className="flex items-center gap-1.5 hover:text-signal">
          Back to top <ArrowUp size={13} />
        </a>
      </div>
    </footer>
  );
}
