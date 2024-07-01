import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "./Select.tsx";
import BaseProvider from "../../../system/base.provider.tsx";
import FavoriteIcon from "../../Icons/assets/Favorite.tsx";
import SaveIcon from "../../Icons/assets/Save.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Inputs/Select",
  component: Select,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  decorators: [
    (Story) => (
      <BaseProvider Link={<a />}>
        <Story />
      </BaseProvider>
    ),
  ],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Standard: Story = {
  args: {
    placeholder: "Standard",
  },
};

export const Outlined: Story = {
  args: {
    placeholder: "Outlined",
    variant: "outlined",
  },
};

export const Filled: Story = {
  args: {
    placeholder: "Text",
    variant: "filled",
  },
};

export const Borderless: Story = {
  args: {
    placeholder: "Borderless",
    variant: "borderless",
  },
};

export const Properties = () => (
  <div style={{ display: "flex", gap: "12px" }}>
    <Select placeholder="Properties" helperText="Some helper text" />
    <Select placeholder="Required" helperText="Some helper text" required />
    <Select
      placeholder="With Error"
      helperText="Some helper text"
      error="This field is required"
      required
    />
  </div>
);

export const Sizes = () => (
  <div style={{ display: "flex", gap: "12px" }}>
    <Select size="small" variant="outlined" />
    <Select size="medium" variant="outlined" />
    <Select size="large" variant="outlined" />
  </div>
);

export const WithIcons = () => (
  <div style={{ display: "flex", gap: "12px" }}>
    <Select startIcon={<FavoriteIcon />} />
    <Select endIcon={<SaveIcon />} />
    <Select startIcon={<FavoriteIcon />} endIcon={<SaveIcon />} />
  </div>
);

export const Disabled: Story = {
  args: {
    placeholder: "Disabled",
    variant: "standard",
    disabled: true,
  },
};
