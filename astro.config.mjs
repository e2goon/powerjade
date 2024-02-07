import { defineConfig, squooshImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: "https://powerjade.vercel.app",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  image: {
    service: squooshImageService(),
  },
  integrations: [sitemap(), tailwind()],
});
