import { defineConfig } from "astro/config";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import lottie from "astro-integration-lottie";

export default defineConfig({
  integrations: [icon(), mdx(), lottie()],
  output: "server",
  site: "https://keithslyffer.github.io",
});
