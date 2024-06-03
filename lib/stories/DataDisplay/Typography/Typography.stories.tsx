import type { Meta } from "@storybook/react";

import { Typography } from "./Typography.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Data Display/Typography",
  component: Typography,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Typography>;

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Main = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
    <Typography variant="h1">Heading 1</Typography>
    <Typography variant="h2">Heading 2</Typography>
    <Typography variant="h3">Heading 3</Typography>
    <Typography variant="h4">Heading 4</Typography>
    <Typography variant="h5">Heading 5</Typography>
    <Typography variant="h6">Heading 6</Typography>
    <Typography variant="p">Paragraph</Typography>
    <Typography variant="span">Span</Typography>
  </div>
);
