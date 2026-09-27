import { defineConfig } from "astro/config";

export default defineConfig({
    site:   "https://givikuna.github.io",
    output: "static",
    outDir: "./docs",
    build:  {
        format:            "directory",
        inlineStylesheets: "always",
    },
});
