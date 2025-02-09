import type { StorybookConfig } from "@storybook/react-vite";
import { withoutVitePlugins } from "@storybook/builder-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../lib/**/*.mdx", "../lib/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@chromatic-com/storybook",
    "storybook-dark-mode",
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
