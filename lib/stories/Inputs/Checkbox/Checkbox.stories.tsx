import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "./Checkbox.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Inputs/Checkbox",
  component: Checkbox,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Main: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: {
    label: "Label",
  },
};

export const Sizes = () => (
  <div style={{ display: "flex", gap: "12px" }}>
    <Checkbox size="small" />
    <Checkbox size="medium" />
    <Checkbox size="large" />
  </div>
);

export const Disabled = () => (
  <div style={{ display: "flex", gap: "12px" }}>
    <Checkbox disabled label="Disabled" />
    <Checkbox disabled checked label="Disabled" />
  </div>
);
