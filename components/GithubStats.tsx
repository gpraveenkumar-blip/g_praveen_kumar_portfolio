"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Star, GitFork, BookMarked } from "lucide-react";
import { profile } from "@/lib/data";

type Repo = { name: string; html_url: string; stargazers_count: number; forks_count: number; language: string | null; description: string | null };
type GithubUser = { public_repos: number; followers: number; avatar_url: string };

const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || profile.social.github.split("/").pop() || "";

export default function GithubStats() {
  const [user, setUser] = useState<GithubUser | null>(null);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    if (!username) return setStatus("error");
    Promise.all([
      fetch(`https://api.github.com/users/${username}`).then((r) => (r.ok ? r.json() : Promise.reject())),
      fetch(`https://api.github.com/users/${username}/repos?sort=stars&per_page=6`).then((r) => (r.ok ? r.json() : Promise.reject()))
    ])
      .then(([u, r]) => {
        setUser(u);
        setRepos(r);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }, []);

  const totalStars = repos.reduce((sum, r) => sum + r.stargazers_count, 0);

  return (
    <div className="card p-6">
      <div className="flex items-center gap-2">
        <Github size={18} className="text-accent" />
        <h3 className="font-display font-semibold">GitHub Activity</h3>
      </div>

      {status === "error" && (
        <p className="mt-3 text-sm text-mist">
          Live stats unavailable right now — set <code className="rounded bg-navy/5 px-1 dark:bg-white/10">NEXT_PUBLIC_GITHUB_USERNAME</code> in{" "}
          <code className="rounded bg-navy/5 px-1 dark:bg-white/10">.env</code> or visit the{" "}
          <a href={profile.social.github} className="font-semibold text-accent" target="_blank" rel="noopener noreferrer">GitHub profile</a> directly.
        </p>
      )}

      {status === "loading" && <p className="mt-3 text-sm text-mist">Loading live stats…</p>}

      {status === "ready" && user && (
        <>
          <div className="mt-4 grid grid-cols-3 gap-3 text-center">
            <div>
              <p className="font-display text-xl font-bold text-accent">{user.public_repos}</p>
              <p className="text-xs text-mist">Repos</p>
            </div>
            <div>
              <p className="font-display text-xl font-bold text-accent">{totalStars}</p>
              <p className="text-xs text-mist">Stars (top 6)</p>
            </div>
            <div>
              <p className="font-display text-xl font-bold text-accent">{user.followers}</p>
              <p className="text-xs text-mist">Followers</p>
            </div>
          </div>

          <ul className="mt-5 space-y-2">
            {repos.slice(0, 4).map((repo, i) => (
              <motion.li
                key={repo.name}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-lg px-2 py-2 text-sm hover:bg-navy/5 dark:hover:bg-white/5"
                >
                  <span className="flex items-center gap-1.5 truncate">
                    <BookMarked size={13} className="shrink-0 text-mist" /> {repo.name}
                  </span>
                  <span className="flex shrink-0 items-center gap-3 text-xs text-mist">
                    <span className="flex items-center gap-1"><Star size={12} /> {repo.stargazers_count}</span>
                    <span className="flex items-center gap-1"><GitFork size={12} /> {repo.forks_count}</span>
                  </span>
                </a>
              </motion.li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
