import type { Meta, StoryObj } from "@storybook/react-vite";

import { Checkbox } from "./Checkbox.tsx";
import { FormControlLabel } from "../../Form/FormControlLabel";
import { decorators } from "lib/storybook/decorators.tsx";

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
  decorators,
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Main: Story = {
  args: {},
};

export const WithLabel = () => (
  <FormControlLabel label="Label" control={<Checkbox />} />
);

export const Sizes = () => (
  <div style={{ display: "flex", gap: "12px" }}>
    <Checkbox size="xs" />
    <Checkbox size="sm" />
    <Checkbox size="md" />
    <Checkbox size="lg" />
    <Checkbox size="xl" />
  </div>
);

export const Disabled = () => (
  <div style={{ display: "flex", gap: "12px" }}>
    <FormControlLabel
      disabled
      label="Disabled"
      control={<Checkbox disabled />}
    />
    <FormControlLabel
      disabled
      label="Disabled"
      control={<Checkbox disabled checked />}
    />
  </div>
);

export const Color = () => (
  <div style={{ display: "flex", gap: "12px" }}>
    <FormControlLabel label="Primary" control={<Checkbox color="primary" />} />
    <FormControlLabel
      label="Secondary"
      control={<Checkbox color="secondary" />}
    />
  </div>
);
