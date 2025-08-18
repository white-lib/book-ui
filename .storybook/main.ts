import type { StorybookConfig } from "@storybook/react-vite";
import { withoutVitePlugins } from "@storybook/builder-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../lib/**/*.mdx", "../lib/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@storybook/addon-links",
    "@chromatic-com/storybook",
    // "storybook-dark-mode",
    "@storybook/addon-docs",
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  docs: {},

  viteFinal: async (config) => {
    return mergeConfig(
      {
        ...config,
        plugins: await withoutVitePlugins(config.plugins, [
          "vite:lib-inject-css",
        ]),
      },
      {
        css: {
          postcss: null,
        },
      },
    );
  },

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
};
export default config;
