"use client";

import { useEffect, useState } from "react";

export default function TypingTitles({ titles }: { titles: string[] }) {
  const [text, setText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex % titles.length];
    const speed = deleting ? 35 : 65;
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setTitleIndex((i) => i + 1);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, titleIndex, titles]);

  return (
    <span aria-live="polite">
      {text}
      <span className="ml-0.5 inline-block w-[2px] animate-blink bg-accent align-middle" style={{ height: "0.9em" }} />
    </span>
  );
}
