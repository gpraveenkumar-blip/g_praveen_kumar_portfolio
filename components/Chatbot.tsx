"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { chatbotFaq, profile } from "@/lib/data";

type Message = { role: "bot" | "user"; text: string };

function answerFor(input: string): string {
  const lower = input.toLowerCase();
  const match = chatbotFaq.find((f) => f.keywords.some((k) => lower.includes(k)));
  if (match) return match.answer;
  return `I don't have a canned answer for that yet — feel free to email me directly at ${profile.email}, or ask about my skills, projects, resume, or availability.`;
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: `Hi! I'm a quick FAQ assistant for ${profile.name}'s profile. Ask me about skills, projects, or availability.` }
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg: Message = { role: "user", text: input.trim() };
    const botMsg: Message = { role: "bot", text: answerFor(input) };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="mb-3 flex h-[420px] w-[320px] flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-2xl dark:border-white/10 dark:bg-navy2"
            role="dialog"
            aria-label="Profile FAQ assistant"
          >
            <div className="flex items-center gap-2 border-b border-navy/10 bg-navy px-4 py-3 text-paper dark:border-white/10">
              <Bot size={16} className="text-signal" />
              <p className="text-sm font-semibold">Ask about my profile</p>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${
                    m.role === "bot"
                      ? "bg-navy/5 dark:bg-white/10"
                      : "ml-auto bg-grad-accent text-white"
                  }`}
                >
                  {m.text}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-navy/10 p-3 dark:border-white/10">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="e.g. What roles are you open to?"
                aria-label="Ask a question about this profile"
                className="flex-1 rounded-full border border-navy/15 bg-transparent px-3 py-2 text-sm outline-none focus-visible:border-accent dark:border-white/15"
              />
              <button type="submit" aria-label="Send" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-grad-accent text-white">
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open profile chatbot"}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-grad-accent text-white shadow-2xl transition-transform hover:scale-105"
      >
        {open ? <X size={20} /> : <MessageCircle size={20} />}
      </button>
    </div>
  );
}
