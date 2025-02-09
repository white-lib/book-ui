import type { Meta, StoryObj } from "@storybook/react";

import { TextField } from "./TextField.tsx";
import FavoriteIcon from "../../Icons/assets/Favorite.tsx";
import SaveIcon from "../../Icons/assets/Save.tsx";
import { decorators } from "../../../storybook/decorators.tsx";

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
  decorators,
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
  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
    <div style={{ display: "flex", gap: "12px", height: "100px" }}>
      <TextField
        size="xs"
        helperText="Some helper text"
        placeholder="Placeholder"
      />
      <TextField
        size="sm"
        helperText="Some helper text"
        placeholder="Placeholder"
      />
      <TextField
        size="md"
        helperText="Some helper text"
        placeholder="Placeholder"
      />
      <TextField
        size="lg"
        helperText="Some helper text"
        placeholder="Placeholder"
      />
      <TextField
        size="xl"
        helperText="Some helper text"
        placeholder="Placeholder"
      />
    </div>
    <div style={{ display: "flex", gap: "12px" }}>
      <TextField
        size="xs"
        variant="outlined"
        helperText="Some helper text"
        placeholder="Placeholder"
      />
      <TextField
        size="sm"
        variant="outlined"
        helperText="Some helper text"
        placeholder="Placeholder"
      />
      <TextField
        size="md"
        variant="outlined"
        helperText="Some helper text"
        placeholder="Placeholder"
      />
      <TextField
        size="lg"
        variant="outlined"
        helperText="Some helper text"
        placeholder="Placeholder"
      />
      <TextField
        size="xl"
        variant="outlined"
        helperText="Some helper text"
        placeholder="Placeholder"
      />
    </div>
  </div>
);

export const WithIcons = () => (
  <div style={{ display: "flex", gap: "12px" }}>
    <TextField startIcon={<FavoriteIcon />} />
    <TextField endIcon={<SaveIcon />} variant="outlined" />
    <TextField
      startIcon={<FavoriteIcon />}
      endIcon={<SaveIcon />}
      variant="filled"
    />
  </div>
);

export const Disabled: Story = {
  args: {
    placeholder: "Disabled",
    variant: "standard",
    disabled: true,
  },
};
