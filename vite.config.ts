import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";

export default defineConfig({
  css: {
    lightningcss: {
      errorRecovery: true // Required until govuk-frontend removes the '@media zero' hack
    },
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      }
    }
  },
  plugins: [reactRouter()],
  resolve: {
    alias: {
      '@not-govuk/sass-base': '@not-govuk/sass-base/vite' // Vite resolves url() differently from Turbo/webpack
    },
    tsconfigPaths: true,
  },
  ssr: {
    noExternal: [
      /^@not-govuk/,
      /^@react-foundry/
    ]
  }
});
