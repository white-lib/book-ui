import type { Meta } from "@storybook/react";

import { Dialog } from "./Dialog.tsx";

import { decorators } from "lib/storybook/decorators.tsx";
import { Button } from "lib/stories/Inputs/Button";
import { Box } from "lib/stories/Layout/Box";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Feedback/Dialog",
  component: Dialog,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  decorators,
} satisfies Meta<typeof Dialog>;

export default meta;
// type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Main = () => (
  <Box
    style={{
      width: "1000px",
      height: "600px",
    }}
  >
    <Button>Open main dialog</Button>
    <Dialog></Dialog>
  </Box>
);
