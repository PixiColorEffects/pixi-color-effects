import vitePluginString from "vite-plugin-string";
import path from "path";

/**
 * @type {import('vite').UserConfig}
 */
const config = {
  base: "/pixi-color-effects/",
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "pixi-color-effects",
      fileName: (format: string) => `pixi-color-effects.${format}.js`,
    },
    minify: true,
    rollupOptions: {
      external: ["pixi.js"],
    },
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
