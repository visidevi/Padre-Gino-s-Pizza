import { defineConfig } from "vitest/config";

export default defineConfig([
  {
    extends: "./vite.config.js",
    test: {
      include: ["**/*.node.test.{js,jsx}"],
      name: "happy-dom",
      environment: "happy-dom",
      coverage: {
        reporters: ["text", "json", "html"],
      },
    },
    // test: {
    //   environment: "happy-dom",
    //   coverage: {
    //     reporters: ["text", "json", "html"],
    //   },
    // },
  },
  {
    extends: "./vite.config.js",
    test: {
      setupFiles: ["vitest-browser-react"],
      include: ["**/*.browser.test.{js,jsx}"],
      name: "browser",
      browser: {
        provider: "playwright",
        enabled: true,
        name: "firefox", // you can use chromium or webkit here too
      },
    },
  },
]);
