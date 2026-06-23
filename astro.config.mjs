// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          loadPaths: ["src/styles"],
        },
      },
    },
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  },
});
