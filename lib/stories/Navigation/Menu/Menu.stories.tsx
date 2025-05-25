import type { Meta, StoryObj } from "@storybook/react";

import { Menu } from "./Menu.tsx";
import { decorators } from "lib/storybook/decorators.tsx";
import { MenuTrigger } from "lib/stories/Navigation/Menu/components/MenuTrigger/MenuTrigger.tsx";
import { Button } from "lib/stories/Inputs/Button";
import { MenuContent } from "lib/stories/Navigation/Menu/components/MenuContent/MenuContent.tsx";
import { Typography } from "lib/stories/DataDisplay/Typography";
import { MenuItem } from "lib/stories/Navigation/Menu/components/MenuItem/MenuItem.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Navigation/Menu",
  component: Menu,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  decorators,
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: (
      <>
        <MenuTrigger>
          <Button>Open</Button>
        </MenuTrigger>
        <MenuContent>
          <MenuItem>
            <Typography>Item 1 asdnajsklhndksandnklas</Typography>
          </MenuItem>
          <MenuItem>
            <Typography>Item 2</Typography>
          </MenuItem>
          <MenuItem>
            <Typography>Item 3</Typography>
          </MenuItem>
        </MenuContent>
      </>
    ),
  },
};
