import type { Meta } from "@storybook/react-vite";

import { Drawer } from "./Drawer.tsx";

import { decorators } from "lib/storybook/decorators.tsx";
import { DrawerContent } from "lib/stories/Overlays/Drawer/components/DrawerContent";
import { DrawerTrigger } from "lib/stories/Overlays/Drawer/components/DrawerTrigger";
import { Button } from "lib/stories/Inputs/Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Overlays/Drawer",
  component: Drawer,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  decorators,
} satisfies Meta<typeof Drawer>;

export default meta;
// type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Main = () => (
  <Drawer>
    <DrawerTrigger>
      <Button>Open drawer</Button>
    </DrawerTrigger>
    <DrawerContent>
      <h1>Drawer content</h1>
    </DrawerContent>
  </Drawer>
);
