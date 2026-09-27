import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://givikuna.github.io",
  output: "static",
  build: {
    format: "directory",
  },
});