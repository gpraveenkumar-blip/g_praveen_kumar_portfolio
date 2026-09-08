import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#08101F",
        navy: "#0B1B33",
        navy2: "#122A4D",
        steel: "#3D5878",
        mist: "#7C8CA3",
        paper: "#F6F8FB",
        paperDim: "#EAEFF6",
        accent: "#2F6FED",
        accent2: "#6D5BFF",
        signal: "#17D9A3"
      },
      fontFamily: {
        display: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"]
      },
      backgroundImage: {
        "grad-accent": "linear-gradient(135deg, #2F6FED 0%, #6D5BFF 100%)",
        "grad-radial": "radial-gradient(circle at 20% 20%, rgba(47,111,237,0.25), transparent 45%)"
      },
      boxShadow: {
        card: "0 1px 2px rgba(8,16,31,0.06), 0 8px 24px -8px rgba(8,16,31,0.12)",
        cardHover: "0 4px 12px rgba(8,16,31,0.08), 0 16px 40px -12px rgba(47,111,237,0.25)"
      },
      keyframes: {
        blink: { "0%,100%": { opacity: "1" }, "50%": { opacity: "0" } },
        scan: { "0%": { transform: "translateY(-100%)" }, "100%": { transform: "translateY(100%)" } }
      },
      animation: {
        blink: "blink 1s step-end infinite",
        scan: "scan 2.4s linear infinite"
      }
    }
  },
  plugins: []
};
export default config;
