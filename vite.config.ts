import vitePluginString from "vite-plugin-string";
import path from "path";

const globals = {
  "@pixi/constants": "PIXI",
  "@pixi/core": "PIXI",
  "@pixi/filter-color-matrix": "PIXI.filters",
  "@pixi/filter-blur": "PIXI.filters",
  "@pixi/utils": "PIXI.utils"
};

/**
 * @type {import('vite').UserConfig}
 */
const config = {
  base: "/",
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "pixi-color-effects",
      fileName: (format: string) => `pixi-color-effects.${format}.js`,
    },
    minify: true,
    rollupOptions: {
      external: Object.keys(globals),
      output: {
        globals,
      },
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
