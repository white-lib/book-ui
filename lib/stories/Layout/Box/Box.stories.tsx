import type { Meta } from "@storybook/react";

import { Box } from "./Box.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Data Display/Box",
  component: Box,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Box>;

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Main = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
    <Box component="div">Div</Box>
    <Box component="section">Section</Box>
  </div>
);
