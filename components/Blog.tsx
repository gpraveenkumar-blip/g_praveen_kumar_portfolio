"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";
import { blogPosts } from "@/lib/data";

export default function Blog() {
  if (blogPosts.length === 0) return null;
  return (
    <section id="blog" className="bg-paperDim py-20 dark:bg-navy/40">
      <div className="container-xl">
        <p className="section-label">Blog</p>
        <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">Writing on AI &amp; ML</h2>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {blogPosts.map((post, i) => (
            <motion.a
              key={post.title}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card group block p-6"
            >
              <div className="flex flex-wrap gap-1.5">
                {post.tags.map((t) => (
                  <span key={t} className="rounded-full bg-accent/10 px-2.5 py-0.5 text-[11px] font-medium text-accent">{t}</span>
                ))}
              </div>
              <h3 className="mt-3 flex items-center gap-1.5 font-display text-lg font-semibold group-hover:text-accent">
                {post.title} <ArrowUpRight size={15} className="opacity-0 transition-opacity group-hover:opacity-100" />
              </h3>
              <p className="mt-2 text-sm text-steel dark:text-mist">{post.excerpt}</p>
              <p className="mt-4 flex items-center gap-1.5 text-xs text-mist">
                <Calendar size={12} /> {new Date(post.date).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
