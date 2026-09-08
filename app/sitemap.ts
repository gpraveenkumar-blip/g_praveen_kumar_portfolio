import { MetadataRoute } from "next";
import { projects } from "@/lib/data";

const base = "https://your-domain.com"; // TODO: replace with your deployed URL

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    ...projects.map((p) => ({
      url: `${base}/projects/${p.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7
    }))
  ];
}
