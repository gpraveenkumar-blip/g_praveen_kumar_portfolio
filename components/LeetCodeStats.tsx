"use client";

import { useEffect, useState } from "react";
import { Code2 } from "lucide-react";
import { profile } from "@/lib/data";

type Stats = { totalSolved: number; easySolved: number; mediumSolved: number; hardSolved: number; ranking: number };

const username = process.env.NEXT_PUBLIC_LEETCODE_USERNAME || profile.social.leetcode.split("/").pop() || "";

export default function LeetCodeStats() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    if (!username) return setStatus("error");
    // Uses a public community LeetCode stats API. Swap the endpoint if it's ever unavailable —
    // see README for alternatives.
    fetch(`https://leetcode-stats.tashif.codes/${username}`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data) => {
        if (data.status === "error") throw new Error("not found");
        setStats(data);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }, []);

  return (
    <div className="card p-6">
      <div className="flex items-center gap-2">
        <Code2 size={18} className="text-accent" />
        <h3 className="font-display font-semibold">LeetCode</h3>
      </div>

      {status === "error" && (
        <p className="mt-3 text-sm text-mist">
          Live stats unavailable right now — visit the{" "}
          <a href={profile.social.leetcode} className="font-semibold text-accent" target="_blank" rel="noopener noreferrer">LeetCode profile</a> directly.
        </p>
      )}
      {status === "loading" && <p className="mt-3 text-sm text-mist">Loading live stats…</p>}

      {status === "ready" && stats && (
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: "Total", value: stats.totalSolved },
            { label: "Easy", value: stats.easySolved },
            { label: "Medium", value: stats.mediumSolved },
            { label: "Hard", value: stats.hardSolved }
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-lg font-bold text-accent">{s.value}</p>
              <p className="text-xs text-mist">{s.label}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
