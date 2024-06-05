import type { Meta, StoryObj } from "@storybook/react";

import { RadioGroup } from "./RadioGroup.tsx";
import { FormControl } from "../../Form/FormControl";
// import { FormControlLabel } from "../../Form/FormControlLabel";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Inputs/Radio group",
  component: RadioGroup,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Main = () => (
  <FormControl>
    <RadioGroup>
      {/*<FormControlLabel label="Label" control={<Checkbox />} />*/}
    </RadioGroup>
  </FormControl>
);

export const WithLabel: Story = {
  args: {
    label: "Label",
  },
};

export const Sizes = () => (
  <div style={{ display: "flex", gap: "12px" }}>
    <RadioGroup size="small" />
    <RadioGroup size="medium" />
    <RadioGroup size="large" />
  </div>
);

export const Disabled = () => (
  <div style={{ display: "flex", gap: "12px" }}>
    <RadioGroup disabled label="Disabled" />
    <RadioGroup disabled checked label="Disabled" />
  </div>
);
