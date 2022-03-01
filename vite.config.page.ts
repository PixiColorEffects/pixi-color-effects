import vitePluginString from "vite-plugin-string";
import path from "path";

/**
 * @type {import('vite').UserConfig}
 */
const config = {
  base: "/",
  build: {
    outDir: "page",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    vitePluginString({
      include: ["src/filters/**/*.frag"],
    }),
  ],
};

export default config;
