import type { Meta, StoryObj } from "@storybook/react";

import { Radio } from "./Radio.tsx";
import { FormControlLabel } from "../../Form/FormControlLabel";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Inputs/Radio",
  component: Radio,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Main: Story = {
  args: {},
};

export const WithLabel = () => (
  <FormControlLabel label="Label" control={<Radio />} />
);

export const Sizes = () => (
  <div style={{ display: "flex", gap: "12px" }}>
    <Radio size="small" />
    <Radio size="medium" />
    <Radio size="large" />
  </div>
);

export const Disabled = () => (
  <div style={{ display: "flex", gap: "12px" }}>
    <FormControlLabel disabled label="Disabled" control={<Radio disabled />} />
    <FormControlLabel
      disabled
      label="Disabled"
      control={<Radio disabled checked />}
    />
  </div>
);
