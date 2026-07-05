/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        forest: "#22392B",
        "forest-light": "#5C7566",
        cream: "#F5F1E8",
        "cream-200": "#EDE6D6",
        terracotta: "#C1502E",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        mono: ["'JetBrains Mono'", "monospace"],
        body: ["Inter", "sans-serif"],
      },
      animation: {
        marquee: "marquee 28s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
