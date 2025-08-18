import type { Meta, StoryObj } from "@storybook/react-vite";

import { Input } from "./Input.tsx";
import FavoriteIcon from "../../Icons/assets/Favorite.tsx";
import SaveIcon from "../../Icons/assets/Save.tsx";
import { decorators } from "lib/storybook/decorators.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Inputs/Input",
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  decorators,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Standard: Story = {
  args: {
    placeholder: "Standard",
    error: false,
  },
};

export const Outlined: Story = {
  args: {
    placeholder: "Outlined",
    variant: "outlined",
    error: false,
  },
};

export const Filled: Story = {
  args: {
    placeholder: "Text",
    variant: "filled",
    error: false,
  },
};

export const Borderless: Story = {
  args: {
    placeholder: "Borderless",
    variant: "borderless",
    error: false,
  },
};

export const Properties = () => (
  <div style={{ display: "flex", gap: "12px" }}>
    <Input placeholder="Properties" helperText="Some helper text" />
    <Input placeholder="Required" helperText="Some helper text" required />
    <Input
      placeholder="With Error"
      helperText="Some helper text"
      error
      errorText="This field is required"
      required
    />
  </div>
);

export const Sizes = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
    <div style={{ display: "flex", gap: "12px", height: "100px" }}>
      <Input
        size="xs"
        helperText="Some helper text"
        placeholder="Placeholder"
      />
      <Input
        size="sm"
        helperText="Some helper text"
        placeholder="Placeholder"
      />
      <Input
        size="md"
        helperText="Some helper text"
        placeholder="Placeholder"
      />
      <Input
        size="lg"
        helperText="Some helper text"
        placeholder="Placeholder"
      />
      <Input
        size="xl"
        helperText="Some helper text"
        placeholder="Placeholder"
      />
    </div>
    <div style={{ display: "flex", gap: "12px" }}>
      <Input
        size="xs"
        variant="outlined"
        helperText="Some helper text"
        placeholder="Placeholder"
      />
      <Input
        size="sm"
        variant="outlined"
        helperText="Some helper text"
        placeholder="Placeholder"
      />
      <Input
        size="md"
        variant="outlined"
        helperText="Some helper text"
        placeholder="Placeholder"
      />
      <Input
        size="lg"
        variant="outlined"
        helperText="Some helper text"
        placeholder="Placeholder"
      />
      <Input
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
    <Input startItem={<FavoriteIcon />} />
    <Input endItem={<SaveIcon />} variant="outlined" />
    <Input
      startItem={<FavoriteIcon />}
      endItem={<SaveIcon />}
      variant="filled"
    />
  </div>
);

export const Colors = () => (
  <div style={{ display: "flex", gap: "12px" }}>
    <Input color="primary" />
    <Input color="secondary" />
  </div>
);

export const Disabled: Story = {
  args: {
    placeholder: "Disabled",
    variant: "standard",
    disabled: true,
  },
};
