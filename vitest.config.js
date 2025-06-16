import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    projects: [
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
      },
      {
        extends: "./vite.config.js",
        test: {
          setupFiles: ["vitest-browser-react"],
          include: ["**/*.browser.test.{js,jsx}"],
          name: "browser",
          browser: {
            enabled: true,
            provider: "playwright",
            instances: [
              {
                browser: "chromium",
              },
            ],
          },
        },
      },
    ],
  },
});
