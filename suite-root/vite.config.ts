import { defineConfig } from 'vite'
import externalize from 'vite-plugin-externalize-dependencies';

const externalDependencies = ["react", "react/jsx-dev-runtime", "react/jsx-runtime", "react-dom", "react-dom/client", "@foris/suite-root"]

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: "src/main.ts",
      output: {
        format: "esm",
      },
      external: externalDependencies
    },
  },
  plugins: [
    externalize({ externals: externalDependencies })
  ]
});