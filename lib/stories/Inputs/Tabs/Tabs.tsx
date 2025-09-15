"use client";

import {
  Children,
  cloneElement,
  FC,
  PropsWithChildren,
  useCallback,
  useState,
} from "react";

import styles from "./Tabs.module.css";

import { TabsContent } from "lib/stories/Inputs/Tabs/components/TabsContent";
import { Flex } from "lib/stories/Layout/Flex";
import { TabsList } from "lib/stories/Inputs/Tabs/components/TabsList/TabsList.tsx";
import { TabValue } from "./types/Tabs.types.tsx";
import classnames from "classnames";

type Props = PropsWithChildren & {
  variant?: "enclosed" | "line";
  defaultValue?: TabValue;
  onValueChange?: (value: TabValue) => void;
};

export const Tabs: FC<Props> = ({
  variant = "enclosed",
  defaultValue,
  onValueChange,
  children,
}) => {
  const TabsChildren = Children.toArray(children).filter((child) =>
    [TabsContent, TabsList].includes((child as any).type),
  );

  const [currentTab, setCurrentTab] = useState<TabValue | undefined>(
    defaultValue,
  );

  const onTabChange = useCallback((value: TabValue) => {
    setCurrentTab(value);
    onValueChange?.(value);
  }, []);

  return (
    <Flex
      flexDirection="column"
      className={classnames(styles.main, styles[variant])}
      gap="xs"
    >
      {TabsChildren.length > 0
        ? Children.map(TabsChildren, (child) => {
            if ((child as any)?.type === TabsList) {
              return cloneElement(child as any, {
                currentTab,
                onTabChange,
              });
            } else if ((child as any)?.type === TabsContent) {
              const hidden = (child as any).props.value !== currentTab;

              if (hidden) {
                return null;
              }

              return child;
            }
          })
        : undefined}
    </Flex>
  );
};
