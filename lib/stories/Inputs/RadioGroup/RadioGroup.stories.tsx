import type { Meta } from "@storybook/react";

import { RadioGroup } from "./RadioGroup.tsx";
import { FormControl } from "../../Form/FormControl";
import { FormControlLabel, FormLabel, Radio } from "../../../main.ts";
import { useState } from "react";
// import { FormControlLabel } from "../../Form/FormControlLabel";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Inputs/Radio group",
  component: RadioGroup,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof RadioGroup>;

export default meta;
// type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Main = () => (
  <FormControl>
    <RadioGroup name="gender">
      <FormLabel>Gender</FormLabel>
      <FormControlLabel label="Male" value="male" control={<Radio />} />
      <FormControlLabel label="Female" value="female" control={<Radio />} />
      <FormControlLabel label="Other" value="other" control={<Radio />} />
    </RadioGroup>
  </FormControl>
);

export const WithDefaultValue = () => (
  <FormControl>
    <RadioGroup name="gender" defaultValue="male">
      <FormLabel>Gender</FormLabel>
      <FormControlLabel label="Male" value="male" control={<Radio />} />
      <FormControlLabel label="Female" value="female" control={<Radio />} />
      <FormControlLabel label="Other" value="other" control={<Radio />} />
    </RadioGroup>
  </FormControl>
);

export const Sizes = () => (
  <FormControl>
    <RadioGroup name="size">
      <FormLabel>Size</FormLabel>
      <FormControlLabel
        label="Small"
        value="small"
        control={<Radio size="small" />}
      />
      <FormControlLabel label="Medium" value="medium" control={<Radio />} />
      <FormControlLabel
        label="Large"
        value="large"
        control={<Radio size="large" />}
      />
    </RadioGroup>
  </FormControl>
);

export const Controlled = () => {
  const [value, setValue] = useState<string | number>("male");

  return (
    <FormControl>
      <RadioGroup
        name="gender"
        value={value}
        onChange={(value) => {
          setValue(value);
        }}
      >
        <FormLabel>Gender</FormLabel>
        <FormControlLabel label="Male" value="male" control={<Radio />} />
        <FormControlLabel label="Female" value="female" control={<Radio />} />
        <FormControlLabel label="Other" value="other" control={<Radio />} />
      </RadioGroup>
    </FormControl>
  );
};
