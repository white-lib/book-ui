import type { Meta } from "@storybook/react-vite";

import { decorators } from "lib/storybook/decorators.tsx";
import { Tabs } from "lib/stories/Inputs/Tabs";
import { TabsContent } from "lib/stories/Inputs/Tabs/components/TabsContent";
import { TabsList } from "lib/stories/Inputs/Tabs/components/TabsList/TabsList.tsx";
import { TabsTrigger } from "lib/stories/Inputs/Tabs/components/TabsTrigger";
import { Text } from "lib/stories/DataDisplay/Text";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Inputs/Tabs",
  component: Tabs,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  decorators,
} satisfies Meta<typeof Tabs>;

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Enclosed = () => (
  <Tabs defaultValue="tab_1">
    <TabsList>
      <TabsTrigger value="tab_1">
        <Text>Tab 1</Text>
      </TabsTrigger>
      <TabsTrigger value="tab_2">
        <Text>Tab 2</Text>
      </TabsTrigger>
    </TabsList>
    <TabsContent value="tab_1">
      <Text>Content for Tab 1</Text>
    </TabsContent>
    <TabsContent value="tab_2">
      <Text>Content for Tab 2</Text>
    </TabsContent>
  </Tabs>
);

export const Line = () => (
  <Tabs defaultValue="tab_1" variant="line">
    <TabsList>
      <TabsTrigger value="tab_1">
        <Text>Tab 1</Text>
      </TabsTrigger>
      <TabsTrigger value="tab_2">
        <Text>Tab 2</Text>
      </TabsTrigger>
    </TabsList>
    <TabsContent value="tab_1">
      <Text>Content for Tab 1</Text>
    </TabsContent>
    <TabsContent value="tab_2">
      <Text>Content for Tab 2</Text>
    </TabsContent>
  </Tabs>
);
