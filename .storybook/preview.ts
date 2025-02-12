import "../lib/assets/styles/root.scss";
import "../lib/assets/styles/dev.scss";

import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    // actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
