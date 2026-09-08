"use client";

import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { profile } from "@/lib/data";
import { cn } from "@/lib/utils";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#resume", label: "Resume" },
  { href: "#achievements", label: "Achievements" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-navy/10 bg-paper/85 backdrop-blur-md dark:border-white/10 dark:bg-ink/85"
          : "bg-transparent"
      )}
    >
      <nav className="container-xl flex h-16 items-center justify-between" aria-label="Primary">
        <a href="#home" className="font-display text-lg font-bold tracking-tight">
          {profile.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-steel transition-colors hover:text-accent dark:text-mist"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a href={profile.resumePdf} download className="btn-secondary !px-4 !py-2 text-xs">
            <Download size={14} /> Resume
          </a>
          <a href="#contact" className="btn-primary !px-4 !py-2 text-xs">
            Hire Me
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-navy/15 dark:border-white/15"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-navy/10 bg-paper px-5 pb-6 pt-2 dark:border-white/10 dark:bg-ink lg:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-3 text-sm font-medium text-steel hover:bg-navy/5 hover:text-accent dark:text-mist dark:hover:bg-white/5"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-3 w-full">
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}
