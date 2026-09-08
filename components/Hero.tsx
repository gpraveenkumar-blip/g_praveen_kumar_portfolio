"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Mail, ExternalLink, Download, FileText, Send } from "lucide-react";
import { profile, recruiterSnapshot } from "@/lib/data";
import TypingTitles from "./TypingTitles";

const socials = [
  { href: profile.social.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: profile.social.github, label: "GitHub", icon: Github },
  { href: profile.social.kaggle, label: "Kaggle", icon: ExternalLink },
  { href: profile.social.leetcode, label: "LeetCode", icon: ExternalLink },
  { href: profile.social.hackerrank, label: "HackerRank", icon: ExternalLink },
  { href: profile.social.medium, label: "Medium", icon: ExternalLink },
  { href: profile.social.email, label: "Email", icon: Mail }
];

const scanLines = [
  { label: "role_match", value: recruiterSnapshot.expectedRole },
  { label: "experience", value: `${recruiterSnapshot.yearsExperience} yrs` },
  { label: "projects_shipped", value: recruiterSnapshot.projectsCompleted },
  { label: "status", value: "available", live: true },
  { label: "location_pref", value: recruiterSnapshot.preferredLocations }
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy text-paper">
      <div className="pointer-events-none absolute inset-0 bg-grad-radial" aria-hidden="true" />
      <div className="container-xl relative grid grid-cols-1 items-center gap-14 py-20 md:py-28 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left: identity */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label text-signal">Available for hire</p>

          <div className="mt-5 flex items-center gap-4">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-white/15 sm:h-20 sm:w-20">
              <Image src={profile.photo} alt={profile.name} fill className="object-cover" priority />
            </div>
            <h1 className="font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              {profile.name}
            </h1>
          </div>

          <p className="mt-4 h-8 font-mono text-base text-accent sm:text-lg">
            <TypingTitles titles={profile.titles} />
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-mist sm:text-lg">{profile.tagline}</p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-mist/80">{profile.valueProposition}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={profile.resumePdf} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <FileText size={16} /> View Resume
            </a>
            <a href={profile.resumePdf} download className="btn-secondary !border-white/20 !bg-transparent !text-paper hover:!text-signal">
              <Download size={16} /> Download Resume
            </a>
            <a href="#contact" className="btn-secondary !border-white/20 !bg-transparent !text-paper hover:!text-signal">
              <Send size={16} /> Contact Me
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {socials.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-mist transition-colors hover:border-signal hover:text-signal"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right: signature element — recruiter quick-scan console */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink/60 font-mono text-sm shadow-2xl backdrop-blur">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-signal/70" />
              <span className="ml-2 text-xs text-mist">recruiter_scan.log</span>
            </div>
            <div className="relative space-y-3 px-5 py-6">
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-24 animate-scan bg-gradient-to-b from-signal/10 to-transparent"
                aria-hidden="true"
              />
              <p className="text-xs text-mist">$ scan --candidate {profile.name.split(" ")[0].toLowerCase()} --for role_fit</p>
              {scanLines.map((line, i) => (
                <motion.p
                  key={line.label}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.12, duration: 0.4 }}
                  className="flex items-center justify-between gap-4 text-xs sm:text-sm"
                >
                  <span className="text-mist">{line.label}</span>
                  <span className={line.live ? "flex items-center gap-1.5 font-semibold text-signal" : "font-semibold text-paper"}>
                    {line.live && <span className="h-1.5 w-1.5 rounded-full bg-signal animate-blink" />}
                    {line.value}
                  </span>
                </motion.p>
              ))}
              <div className="pt-2">
                <p className="mb-1 text-xs text-mist">match_confidence</p>
                <div className="progress-track !bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "96%" }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="progress-fill"
                  />
                </div>
              </div>
              <p className="pt-2 text-xs text-signal">✓ scan complete — full profile below</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
