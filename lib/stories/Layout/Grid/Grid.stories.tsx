import type { Meta } from "@storybook/react-vite";

import { Grid } from "./Grid.tsx";
import { Flex } from "../Flex";
import { GridRuler } from "../GridRuler";
import { decorators } from "lib/storybook/decorators.tsx";
import { Text } from "lib/main.ts";

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
      width: "1000px",
      // maxWidth: "1000px",
      height: "800px",
      position: "relative",
    }}
  >
    <GridRuler spacing="sm" />
    <Grid
      container
      spacing="sm"
      // justifyContent="space-between"
      // alignItems="center"
      style={{ height: "100%" }}
    >
      <Grid item xs={1} sm={6} md={4} lg={3}>
        <Flex
          style={{
            width: "100px",
            height: "100px",
            background: "var(--bu-primary-600)",
          }}
          alignItems="center"
          justifyContent="center"
        >
          <Text variant="p">Div 1</Text>
        </Flex>
      </Grid>
      <Grid item xs={1} sm={3} md={4} lg={3}>
        <Flex
          style={{
            width: "100px",
            height: "100px",
            background: "var(--bu-primary-600)",
          }}
          alignItems="center"
          justifyContent="center"
        >
          <Text variant="p">Div 2</Text>
        </Flex>
      </Grid>
      <Grid item xs={1} sm={3} md={4} lg={3}>
        <Flex
          style={{
            width: "100px",
            height: "100px",
            background: "var(--bu-primary-600)",
          }}
          alignItems="center"
          justifyContent="center"
        >
          <Text variant="p">Div 3</Text>
        </Flex>
      </Grid>
      <Grid item xs={1} sm={3} md={4} lg={3}>
        <Flex
          style={{
            width: "100px",
            height: "100px",
            background: "var(--bu-primary-600)",
          }}
          alignItems="center"
          justifyContent="center"
        >
          <Text variant="p">Div 4</Text>
        </Flex>
      </Grid>
    </Grid>
  </div>
);
