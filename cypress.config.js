import { defineConfig } from "cypress";
import viteConfig from "./vite.config.js"; // Add the .js extension here

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
  e2e: {
    baseUrl: "https://lrnr-app.vercel.app", // Set the base URL for end-to-end tests
    supportFile: false, // Disable the default Cypress support file
    setupNodeEvents(on, config) {
      // Listen for the dev-server:start event to configure Vite
      on("dev-server:start", (options) => {
        return startDevServer({
          options,
          viteConfig, // Pass the Vite configuration for bundling

        });
      });
      return config; // Return the modified Cypress configuration
    },
  },
});