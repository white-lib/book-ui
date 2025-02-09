import type { Meta } from "@storybook/react";

import { Grid } from "./Grid.tsx";
import { Box } from "../Box";
import { GridRuler } from "../GridRuler";
import { decorators } from "../../../storybook/decorators.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Layout/Grid",
  component: Grid,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  decorators,
} satisfies Meta<typeof Grid>;

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Main = () => (
  <div
    style={{
      // width: "1000px",
      maxWidth: "1000px",
      height: "800px",
      position: "relative",
    }}
  >
    <GridRuler spacing="sm" />
    <Grid
      container
      spacing="sm"
      justifyContent="space-between"
      alignItems="center"
      style={{ height: "100%" }}
    >
      <Grid item xs={1} sm={6} md={4} lg={3}>
        <Box>Div 1</Box>
      </Grid>
      <Grid item xs={1} sm={3} md={4} lg={3}>
        <Box>Div 2</Box>
      </Grid>
      <Grid item xs={1} sm={3} md={4} lg={3}>
        <Box>Div 3</Box>
      </Grid>
      <Grid item xs={1} sm={3} md={4} lg={3}>
        <Box>Div 4</Box>
      </Grid>
    </Grid>
  </div>
);
