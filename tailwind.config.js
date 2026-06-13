/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "#E5E7EB",
        input: "#FFFFFF",
        ring: "#EC4899",
        background: "#FFFFFF",
        foreground: "#111827",
        primary: {
          DEFAULT: "#EC4899",
          dark: "#BE185D",
          light: "#F472B6",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#3B82F6",
          dark: "#1D4ED8",
          light: "#93C5FD",
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "#EF4444",
          dark: "#DC2626",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F9FAFB",
          foreground: "#6B7280",
        },
        accent: {
          DEFAULT: "#10B981",
          dark: "#047857",
          foreground: "#FFFFFF",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#111827",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#111827",
        },
        neutral: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
        pink: {
          50: "#FDF2F8",
          100: "#FCE7F3",
          DEFAULT: "#EC4899",
          500: "#EC4899",
          600: "#DB2777",
          accent: "#BE185D",
        },
        red: {
          DEFAULT: "#EF4444",
          accent: "#DC2626",
        },
        blue: {
          DEFAULT: "#3B82F6",
          accent: "#1D4ED8",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "100%",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
