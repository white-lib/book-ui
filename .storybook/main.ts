import type { StorybookConfig } from "@storybook/react-vite";
import { withoutVitePlugins } from "@storybook/builder-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../lib/**/*.mdx", "../lib/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
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
          preprocessorOptions: {
            scss: {
              additionalData: `
                  @import "../lib/assets/styles/global.scss";
              `,
            },
          },
        },
      },
    );
  },
};
export default config;
