import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from "./Icon.tsx";
import FavoriteIcon from "./assets/Favorite.tsx";
import SaveIcon from "./assets/Save.tsx";
import LoadingIcon from "./assets/Loading.tsx";
import BrokenImage from "./assets/BrokenImage.tsx";
import Visibility from "./assets/Visibility.tsx";
import VisibilityOff from "./assets/VisibilityOff.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Assets/Icons",
  component: Icon,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Icon>;

export default meta;
// @ts-ignore
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Icons = () => {
  return (
    <div style={{ display: "flex", gap: "12px" }}>
      <FavoriteIcon />
      <SaveIcon />
      <LoadingIcon />
      <BrokenImage />
      <Visibility />
      <VisibilityOff />
    </div>
  );
};
