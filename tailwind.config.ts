import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: ["**/*.vue"],
  theme: {
    extend: {},
  },
  plugins: [typography],
} satisfies Config;
