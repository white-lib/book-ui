import type { Meta } from "@storybook/react-vite";

import { ButtonGroup } from "./ButtonGroup.tsx";
import { Button } from "../Button";

import { decorators } from "lib/storybook/decorators.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Inputs/ButtonGroup",
  component: ButtonGroup,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  decorators,
} satisfies Meta<typeof ButtonGroup>;

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Contained = (args: typeof ButtonGroup) => {
  return (
    <ButtonGroup {...args}>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Tree</Button>
    </ButtonGroup>
  );
};

export const Outlined = (args: typeof ButtonGroup) => (
  <ButtonGroup {...args} variant="outlined">
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Tree</Button>
  </ButtonGroup>
);

export const Text = (args: typeof ButtonGroup) => (
  <ButtonGroup {...args} variant="text">
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Tree</Button>
  </ButtonGroup>
);
