"use client";

import { Trophy, ExternalLink } from "lucide-react";
import { profile } from "@/lib/data";

// Kaggle has no public read API for profile stats, so this section links out.
// Fill these placeholder numbers in manually, or swap in a scraped feed if you build one.
const kaggleSummary = { competitions: "3", notebooks: "12", datasets: "2", medals: "1 Bronze" };

export default function KaggleStats() {
  return (
    <div className="card p-6">
      <div className="flex items-center gap-2">
        <Trophy size={18} className="text-accent" />
        <h3 className="font-display font-semibold">Kaggle</h3>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {Object.entries(kaggleSummary).map(([label, value]) => (
          <div key={label} className="text-center">
            <p className="font-display text-lg font-bold text-accent">{value}</p>
            <p className="text-xs capitalize text-mist">{label}</p>
          </div>
        ))}
      </div>
      <a
        href={profile.social.kaggle}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 flex items-center gap-1 text-sm font-semibold text-accent"
      >
        View full Kaggle profile <ExternalLink size={13} />
      </a>
    </div>
  );
}
