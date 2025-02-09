import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";
import FavoriteIcon from "../../Icons/assets/Favorite.tsx";
import SaveIcon from "../../Icons/assets/Save.tsx";

import { decorators } from "../../../storybook/decorators.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Inputs/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  decorators,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Contained: Story = {
  args: {
    children: "Contained",
  },
};

export const Outlined: Story = {
  args: {
    children: "Outlined",
    variant: "outlined",
  },
};

export const Text: Story = {
  args: {
    children: "Text",
    variant: "text",
  },
};

export const Sizes = () => (
  <div style={{ display: "flex", gap: "6px" }}>
    <Button size="xs">Extra Small</Button>
    <Button size="sm">Small</Button>
    <Button size="md">Medium</Button>
    <Button size="lg">Large</Button>
    <Button size="xl">Extra Large</Button>
  </div>
);

export const WithIcons = () => (
  <div style={{ display: "flex", gap: "12px" }}>
    <Button startIcon={<FavoriteIcon />}>Like</Button>
    <Button endIcon={<SaveIcon />}>Save</Button>
    <Button disableSpacing>
      <FavoriteIcon />
    </Button>
  </div>
);

export const Loading: Story = {
  args: {
    children: "Loading",
    variant: "contained",
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    variant: "contained",
    disabled: true,
  },
};

export const Link: Story = {
  args: {
    children: "Link",
    variant: "contained",
    href: "https://www.google.com/",
    target: "_blank",
  },
};
