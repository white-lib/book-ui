import type { Meta, StoryObj } from "@storybook/react-vite";

import { Switch } from "./Switch.tsx";
import { decorators } from "lib/storybook/decorators.tsx";
import { FormControlLabel } from "lib/stories/Form/FormControlLabel";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Inputs/Switch",
  component: Switch,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  decorators,
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Main: Story = {
  args: {},
};

export const WithLabel = () => (
  <FormControlLabel label="Label" control={<Switch />} />
);

export const Sizes = () => (
  <div style={{ display: "flex", gap: "12px" }}>
    <Switch size="xs" />
    <Switch size="sm" />
    <Switch size="md" />
    <Switch size="lg" />
    <Switch size="xl" />
  </div>
);

export const Disabled = () => (
  <div style={{ display: "flex", gap: "12px" }}>
    <FormControlLabel disabled label="Disabled" control={<Switch disabled />} />
    <FormControlLabel
      disabled
      label="Disabled"
      control={<Switch disabled checked />}
    />
  </div>
);

export const Color = () => (
  <div style={{ display: "flex", gap: "12px" }}>
    <FormControlLabel label="Primary" control={<Switch color="primary" />} />
    <FormControlLabel
      label="Secondary"
      control={<Switch color="secondary" />}
    />
  </div>
);
