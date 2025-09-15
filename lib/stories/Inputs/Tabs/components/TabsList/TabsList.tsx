import { Children, cloneElement, FC, PropsWithChildren } from "react";

import styles from "./TabsList.module.css";

import { Flex } from "lib/stories/Layout/Flex";
import { TabValue } from "lib/stories/Inputs/Tabs/types/Tabs.types.tsx";

type Props = PropsWithChildren & {
  value?: TabValue;
  currentTab?: TabValue;
  onTabChange?: (value: TabValue) => void;
};

export const TabsList: FC<Props> = ({ currentTab, onTabChange, children }) => {
  return (
    <Flex alignItems="center" gap="xs" className={styles.main}>
      {Children.map(children, (child) => {
        return cloneElement(child as any, {
          active: (child as any).props.value === currentTab,
          onClick: onTabChange,
        });
      })}
    </Flex>
  );
};
