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
        border: "#E7E5E4",
        input: "#FFFFFF",
        ring: "#C9202B",
        background: "#FFFDF9",
        foreground: "#18181B",
        primary: {
          DEFAULT: "#C9202B",
          dark: "#A91520",
          light: "#E86B75",
          soft: "#FBE7EA",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#18181B",
          dark: "#000000",
          light: "#2B2B2F",
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "#C9202B",
          dark: "#A91520",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#FFF4EC",
          foreground: "#6B6666",
        },
        accent: {
          DEFAULT: "#0F766E",
          dark: "#0B5F59",
          light: "#E6F4F1",
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
          50: "#FFFDF9",
          100: "#FFF4EC",
          200: "#E7E5E4",
          300: "#D6D3D1",
          400: "#A8A29E",
          500: "#6B6666",
          600: "#57534E",
          700: "#44403C",
          800: "#2B2B2F",
          900: "#18181B",
        },
        pink: {
          50: "#FBE7EA",
          100: "#F6D4D9",
          200: "#EFAEB6",
          300: "#E86B75",
          500: "#C9202B",
          600: "#A91520",
          700: "#8F1119",
          DEFAULT: "#C9202B",
          accent: "#A91520",
        },
        red: {
          50: "#FBE7EA",
          100: "#F6D4D9",
          200: "#EFAEB6",
          300: "#E86B75",
          500: "#C9202B",
          600: "#A91520",
          700: "#8F1119",
          DEFAULT: "#C9202B",
          accent: "#A91520",
        },
        blue: {
          50: "#FBE7EA",
          100: "#F6D4D9",
          200: "#EFAEB6",
          500: "#E86B75",
          600: "#C9202B",
          700: "#A91520",
          DEFAULT: "#E86B75",
          accent: "#C9202B",
        },
        teal: {
          50: "#E6F4F1",
          100: "#CCE9E3",
          600: "#0F766E",
          700: "#0B5F59",
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
