import type { Meta, StoryObj } from "@storybook/react-vite";

import MountainImg from "./assets/mountain.jpeg";
import { Avatar } from "lib/stories/DataDisplay/Avatar";

import { Card } from "./Card.tsx";
import { CardHeader } from "./components/CardHeader";
import { CardMedia } from "./components/CardMedia";
import { CardContent } from "./components/CardContent";
import { CardActions } from "./components/CardActions";

import { Text } from "lib/stories/DataDisplay/Text";
import { Button } from "lib/stories/Inputs/Button";

import FavoriteIcon from "lib/stories/Icons/assets/Favorite.tsx";
import SaveIcon from "lib/stories/Icons/assets/Save.tsx";

import { decorators } from "lib/storybook/decorators.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Surfaces/Card",
  component: Card,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  decorators,
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Main: Story = {
  args: {
    style: { maxWidth: 345 },
    children: (
      <>
        <CardHeader
          avatar={<Avatar>C</Avatar>}
          title="Lorem impsum dolor sit"
          subheader="Jun 3, 2024"
        />
        <CardMedia
          src={MountainImg}
          height="194px"
          alt="Mountains"
          aria-label="Mountains"
        />
        <CardContent>
          <Text variant="p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium animi commodi consequuntur cum.
          </Text>
        </CardContent>
        <CardActions disableSpacing>
          <Button variant="text">
            <FavoriteIcon />
          </Button>
          <Button variant="text">
            <SaveIcon />
          </Button>
        </CardActions>
      </>
    ),
  },
};

export const ImageOnTop: Story = {
  args: {
    style: { maxWidth: 345 },
    topSpace: false,
    children: (
      <>
        <CardMedia
          src={MountainImg}
          height="194px"
          alt="Mountains"
          aria-label="Mountains"
        />
        <CardHeader
          avatar={<Avatar>D</Avatar>}
          title="Lorem impsum dolor sit"
          subheader="Jun 3, 2024"
        />
        <CardContent>
          <Text variant="p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium animi commodi consequuntur cum.
          </Text>
        </CardContent>
        <CardActions disableSpacing>
          <Button variant="text">
            <FavoriteIcon />
          </Button>
          <Button variant="text">
            <SaveIcon />
          </Button>
        </CardActions>
      </>
    ),
  },
};

export const Basic: Story = {
  args: {
    style: { maxWidth: 345 },
    children: (
      <>
        <CardContent>
          <Text>Word of the Day</Text>
          <Text variant="h2">be - nev - o - lent</Text>
          <Text>adjective</Text>
          <Text variant="h5">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Text>
        </CardContent>
        <CardActions>
          <Button size="sm">Learn More</Button>
        </CardActions>
      </>
    ),
  },
};
