import type { Meta, StoryObj } from "@storybook/react-vite";

import { Select } from "./Select.tsx";
import FavoriteIcon from "lib/stories/Icons/assets/Favorite.tsx";
import { decorators } from "lib/storybook/decorators.tsx";

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
  decorators,
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
        error
        errorText="This field is required"
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
      <Select label="small" size="sm" variant="outlined">
        {Children}
      </Select>
      <Select label="medium" size="md" variant="outlined">
        {Children}
      </Select>
      <Select label="large" size="lg" variant="outlined">
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
