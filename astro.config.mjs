import { defineConfig } from "astro/config";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import lottie from "astro-integration-lottie";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), mdx(), lottie()],
  output: "server",
  site: "https://keithslyffer.github.io",
  adapter: netlify()
});