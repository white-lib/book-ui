import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "./Select.tsx";
import { BaseProvider } from "../../../system/base.provider.tsx";
import FavoriteIcon from "../../Icons/assets/Favorite.tsx";

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
      <BaseProvider>
        <Story />
      </BaseProvider>
    ),
  ],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const Children = (
  <>
    <option value="apple">Apple</option>
    <option value="banana">Banana</option>
    <option value="orange">Orange</option>
  </>
);

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Standard: Story = {
  args: {
    label: "Fruit",
    children: Children,
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    label: "Fruit",
    children: Children,
  },
};

export const Filled: Story = {
  args: {
    variant: "filled",
    label: "Fruit",
    children: Children,
  },
};

export const Borderless: Story = {
  args: {
    variant: "borderless",
    label: "Fruit",
    children: Children,
  },
};

export const Properties = () => {
  return (
    <div style={{ display: "flex", gap: "12px" }}>
      <Select label="Properties" helperText="Some helper text">
        {Children}
      </Select>
      <Select label="Required" helperText="Some helper text" required>
        {Children}
      </Select>
      <Select
        label="With Error"
        helperText="Some helper text"
        error="This field is required"
        required
      >
        {Children}
      </Select>
    </div>
  );
};

export const Sizes = () => {
  return (
    <div style={{ display: "flex", gap: "12px" }}>
      <Select label="small" size="small" variant="outlined">
        {Children}
      </Select>
      <Select label="medium" size="medium" variant="outlined">
        {Children}
      </Select>
      <Select label="large" size="large" variant="outlined">
        {Children}
      </Select>
    </div>
  );
};

export const WithIcons = () => (
  <div style={{ display: "flex", gap: "12px" }}>
    <Select startIcon={<FavoriteIcon />} label="With icon">
      {Children}
    </Select>
  </div>
);

export const Disabled: Story = {
  args: {
    label: "Disabled",
    variant: "standard",
    disabled: true,
    children: Children,
  },
};
