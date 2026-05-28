import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        "border-low": "var(--border-low)",
        "border-high": "var(--border-high)",
        accent: "var(--accent)",
        "accent-light": "var(--accent-light)",
        "accent-bg": "var(--accent-bg)",
        "accent-border": "var(--accent-border)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-muted": "var(--text-muted)",
        success: "var(--success)",
      },
      fontFamily: {
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      fontSize: {
        label: ["12px", { lineHeight: "16px", letterSpacing: "0.08em" }],
      },
      maxWidth: {
        content: "1200px",
      },
      spacing: {
        section: "120px",
      },
    },
  },
  plugins: [],
};

export default config;
