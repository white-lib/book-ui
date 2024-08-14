import type { Meta, StoryObj } from "@storybook/react";

import { TextField } from "./TextField.tsx";
import { BaseProvider } from "../../../system/base.provider.tsx";
import FavoriteIcon from "../../Icons/assets/Favorite.tsx";
import SaveIcon from "../../Icons/assets/Save.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Inputs/Text Field",
  component: TextField,
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
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Standard: Story = {
  args: {
    placeholder: "Standard",
  },
};

export const Outlined: Story = {
  args: {
    placeholder: "Outlined",
    variant: "outlined",
  },
};

export const Filled: Story = {
  args: {
    placeholder: "Text",
    variant: "filled",
  },
};

export const Borderless: Story = {
  args: {
    placeholder: "Borderless",
    variant: "borderless",
  },
};

export const Properties = () => (
  <div style={{ display: "flex", gap: "12px" }}>
    <TextField placeholder="Properties" helperText="Some helper text" />
    <TextField placeholder="Required" helperText="Some helper text" required />
    <TextField
      placeholder="With Error"
      helperText="Some helper text"
      error="This field is required"
      required
    />
  </div>
);

export const Sizes = () => (
  <div style={{ display: "flex", gap: "12px" }}>
    <TextField size="small" variant="outlined" />
    <TextField size="medium" variant="outlined" />
    <TextField size="large" variant="outlined" />
  </div>
);

export const WithIcons = () => (
  <div style={{ display: "flex", gap: "12px" }}>
    <TextField startIcon={<FavoriteIcon />} />
    <TextField endIcon={<SaveIcon />} />
    <TextField startIcon={<FavoriteIcon />} endIcon={<SaveIcon />} />
  </div>
);

export const Disabled: Story = {
  args: {
    placeholder: "Disabled",
    variant: "standard",
    disabled: true,
  },
};
