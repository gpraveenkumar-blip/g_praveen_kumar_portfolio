"use client";

import GithubStats from "./GithubStats";
import LeetCodeStats from "./LeetCodeStats";
import KaggleStats from "./KaggleStats";

export default function CodingProfiles() {
  return (
    <section className="bg-paperDim py-20 dark:bg-navy/40">
      <div className="container-xl">
        <p className="section-label">Live Profiles</p>
        <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">Coding activity, pulled live</h2>
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <GithubStats />
          <LeetCodeStats />
          <KaggleStats />
        </div>
      </div>
    </section>
  );
}
