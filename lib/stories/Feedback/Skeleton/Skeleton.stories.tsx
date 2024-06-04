import type { Meta } from "@storybook/react";

import { Skeleton } from "./Skeleton.tsx";
import { Box } from "../../Layout/Box";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Feedback/Skeleton",
  component: Skeleton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Skeleton>;

export default meta;
// type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Main = () => (
  <Box
    style={{
      display: "flex",
      flexDirection: "column",
      width: "300px",
      gap: "8px",
    }}
  >
    <Skeleton variant="text" />
    <Skeleton variant="circular" width="50px" height="50px" />
    <Skeleton variant="rectangular" width="300px" height="60px" />
    <Skeleton variant="rounded" width="300px" height="60px" />
  </Box>
);
