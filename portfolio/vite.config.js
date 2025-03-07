import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      boxShadow: {
        cyanshadow: "0px 0px 20px 0px rgba(94, 205, 220, 0.5)",
      },
    },
  },
  plugins: [tailwindcss(), react()],
});
