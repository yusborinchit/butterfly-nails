import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        text: "#1a0e11",
        background: "#ece4de",
        primary: "#8d5959",
        secondary: "#e5cccc",
        accent: "#88ad99",
      },
      fontFamily: {
        sans: ["Schibsted Grotesk"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
} satisfies Config;
