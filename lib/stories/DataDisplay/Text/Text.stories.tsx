import type { Meta } from "@storybook/react-vite";

import { Text } from "./Text.tsx";

import { decorators } from "lib/storybook/decorators.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Data Display/Text",
  component: Text,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  decorators,
} satisfies Meta<typeof Text>;

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Main = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
    <Text variant="h1">Heading 1</Text>
    <Text variant="h2">Heading 2</Text>
    <Text variant="h3">Heading 3</Text>
    <Text variant="h4">Heading 4</Text>
    <Text variant="h5">Heading 5</Text>
    <Text variant="h6">Heading 6</Text>
    <Text variant="p">Paragraph</Text>
    <Text variant="span">Span</Text>
    <Text variant="hint">Hint</Text>
  </div>
);
