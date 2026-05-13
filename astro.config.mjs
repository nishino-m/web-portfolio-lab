import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://web-portfolio-lab.pages.dev",
  integrations: [sitemap()],
});
