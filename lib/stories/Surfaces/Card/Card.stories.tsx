import type { Meta, StoryObj } from "@storybook/react";

import MountainImg from "./assets/mountain.jpeg";
import { Avatar } from "../../DataDisplay/Avatar";

import { Card } from "./Card.tsx";
import { CardHeader } from "./components/CardHeader";
import { CardMedia } from "./components/CardMedia";
import { Typography } from "../../DataDisplay/Typography";
import { CardContent } from "./components/CardContent";
import { CardActions } from "./components/CardActions";
import { Button } from "../../../main.ts";
import FavoriteIcon from "../../Icons/assets/Favorite.tsx";
import SaveIcon from "../../Icons/assets/Save.tsx";

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
          avatar={<Avatar>A</Avatar>}
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
          <Typography variant="p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium animi commodi consequuntur cum.
          </Typography>
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
          avatar={<Avatar>A</Avatar>}
          title="Lorem impsum dolor sit"
          subheader="Jun 3, 2024"
        />
        <CardContent>
          <Typography variant="p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium animi commodi consequuntur cum.
          </Typography>
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
          <Typography>Word of the Day</Typography>
          <Typography variant="h2">be - nev - o - lent</Typography>
          <Typography>adjective</Typography>
          <Typography variant="h5">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </>
    ),
  },
};
