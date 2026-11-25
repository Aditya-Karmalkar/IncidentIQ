/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background, #0e1f3d)",
        foreground: "var(--foreground, #ffffff)",
        muted: {
          DEFAULT: "var(--muted, #1d2f4f)",
          foreground: "var(--muted-foreground, rgba(255, 255, 255, 0.7))",
        },
        primary: {
          DEFAULT: "var(--primary, #5b7cf0)",
          foreground: "var(--primary-foreground, #ffffff)",
        },
        card: {
          DEFAULT: "var(--card, #13274c)",
          foreground: "var(--card-foreground, #ffffff)",
        },
        border: "var(--border, rgba(255, 255, 255, 0.12))",
      },
    },
  },
  plugins: [
    function({ addVariant }) {
      addVariant('pointer-coarse', '@media (pointer: coarse)');
      addVariant('pointer-fine', '@media (pointer: fine)');
    }
  ],
}
