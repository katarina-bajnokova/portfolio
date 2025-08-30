import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    base: "/portfolio/",
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    server: {
      open: true,
      port: 5173,
      strictPort: true,
      host: true,
      watch: { usePolling: true },
    },
    preview: { open: true, port: 8080 },
    css: {
      devSourcemap: true,
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "sass:math";

            @use "@/styles/mixins.scss" as *;
          `,
        },
      },
    },
    build: { outDir: "dist", sourcemap: true, chunkSizeWarningLimit: 1000 },
    base: env.VITE_BASE || "/",
  };
});
