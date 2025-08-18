import type { Meta, StoryObj } from "@storybook/react-vite";
import AvatarImg from "./assets/avatar.jpeg";
import { Avatar } from "./Avatar.tsx";
import { decorators } from "lib/storybook/decorators.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Data Display/Avatar",
  component: Avatar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  decorators,
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Main: Story = {
  args: {
    src: AvatarImg,
    alt: "John Doe",
  },
};

export const NoImage: Story = {
  args: {
    children: "A",
  },
};

export const WithError: Story = {
  args: {
    src: "/error-path",
  },
};
