import type { Meta } from "@storybook/react";

import { Flex } from "./Flex.tsx";
import { decorators } from "lib/storybook/decorators.tsx";
import { Typography } from "lib/main.ts";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Layout/Flex",
  component: Flex,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  decorators,
} satisfies Meta<typeof Flex>;

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Main = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
    <Flex component="div">
      <Typography variant="span">Div</Typography>
    </Flex>
    <Flex component="section">
      <Typography variant="span">Section</Typography>
    </Flex>
  </div>
);
