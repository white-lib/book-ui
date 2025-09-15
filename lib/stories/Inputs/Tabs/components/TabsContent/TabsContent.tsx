import { FC, PropsWithChildren } from "react";
import { TabValue } from "lib/stories/Inputs/Tabs/types/Tabs.types.tsx";
import { Flex, type Props as FlexProps } from "lib/stories/Layout/Flex";

type Props = PropsWithChildren & {
  value: TabValue;
} & FlexProps;

export const TabsContent: FC<Props> = ({ children, ...props }) => {
  return (
    <Flex flexDirection="column" {...props}>
      {children}
    </Flex>
  );
};
