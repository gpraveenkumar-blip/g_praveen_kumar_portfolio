"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react";
import { profile } from "@/lib/data";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="container-xl py-20">
      <p className="section-label">Contact</p>
      <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">Let's talk</h2>
      <p className="mt-3 max-w-xl text-steel dark:text-mist">
        Have a role in mind, or just want to talk about a project? I usually reply within a day.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          {[
            { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
            { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
            { icon: Linkedin, label: "LinkedIn profile", href: profile.social.linkedin },
            { icon: Github, label: "GitHub profile", href: profile.social.github },
            { icon: MapPin, label: profile.location, href: undefined }
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                <item.icon size={16} />
              </span>
              {item.href ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-accent">
                  {item.label}
                </a>
              ) : (
                <span className="text-sm font-medium">{item.label}</span>
              )}
            </div>
          ))}
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card space-y-4 p-6"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-xs font-semibold text-mist">Name</label>
              <input id="name" name="name" required className="mt-1 w-full rounded-lg border border-navy/15 bg-transparent px-3 py-2.5 text-sm outline-none focus-visible:border-accent dark:border-white/15" />
            </div>
            <div>
              <label htmlFor="email" className="text-xs font-semibold text-mist">Email</label>
              <input id="email" name="email" type="email" required className="mt-1 w-full rounded-lg border border-navy/15 bg-transparent px-3 py-2.5 text-sm outline-none focus-visible:border-accent dark:border-white/15" />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="text-xs font-semibold text-mist">Subject</label>
            <input id="subject" name="subject" required className="mt-1 w-full rounded-lg border border-navy/15 bg-transparent px-3 py-2.5 text-sm outline-none focus-visible:border-accent dark:border-white/15" />
          </div>
          <div>
            <label htmlFor="message" className="text-xs font-semibold text-mist">Message</label>
            <textarea id="message" name="message" rows={5} required className="mt-1 w-full rounded-lg border border-navy/15 bg-transparent px-3 py-2.5 text-sm outline-none focus-visible:border-accent dark:border-white/15" />
          </div>

          <button type="submit" disabled={status === "sending"} className="btn-primary w-full">
            {status === "sending" && <Loader2 size={16} className="animate-spin" />}
            {status === "sent" && <CheckCircle2 size={16} />}
            {status === "idle" || status === "error" ? <Send size={16} /> : null}
            {status === "sending" ? "Sending…" : status === "sent" ? "Message sent" : "Send message"}
          </button>

          {status === "error" && (
            <p className="text-sm text-red-500">
              Something went wrong. Please email me directly at {profile.email} instead.
            </p>
          )}
          <p className="text-xs text-mist">
            This form needs an email provider configured — see <code className="rounded bg-navy/5 px-1 dark:bg-white/10">app/api/contact/route.ts</code>.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
