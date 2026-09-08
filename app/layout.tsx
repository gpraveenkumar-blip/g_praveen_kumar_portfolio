import type { Metadata } from "next";
import { Inter, Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";
import ThemeProvider from "@/components/ThemeProvider";
import Chatbot from "@/components/Chatbot";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap"
});
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

const siteUrl = "https://your-domain.com"; // TODO: replace with your deployed URL

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${profile.name} — ${profile.titles.join(" · ")}`,
  description: profile.tagline,
  keywords: ["AI Engineer", "Machine Learning Engineer", "Computer Vision", "Data Scientist", profile.name],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — ${profile.titles.join(" · ")}`,
    description: profile.tagline,
    url: siteUrl,
    siteName: profile.name,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: profile.name }],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.titles.join(" · ")}`,
    description: profile.tagline,
    images: ["/og-image.jpg"]
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.titles[0],
  url: siteUrl,
  email: profile.email,
  address: { "@type": "PostalAddress", addressLocality: profile.location },
  sameAs: Object.values(profile.social).filter((v) => v.startsWith("http"))
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} ${mono.variable}`}>
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
          >
            Skip to main content
          </a>
          <ScrollProgress />
          {children}
          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}
