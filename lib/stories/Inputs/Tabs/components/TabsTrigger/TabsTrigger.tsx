import { Children, FC, PropsWithChildren } from "react";

import styles from "./TabsTrigger.module.css";

import { TabValue } from "lib/stories/Inputs/Tabs/types/Tabs.types.tsx";
import { Flex } from "lib/stories/Layout/Flex";
import classnames from "classnames";

type Props = PropsWithChildren & {
  value: TabValue;
  active?: boolean;
  onClick?: (value: TabValue) => void;
  disabled?: boolean;
};

export const TabsTrigger: FC<Props> = ({
  value,
  active,
  onClick,
  children,
  disabled,
}) => {
  return (
    <>
      {Children.map(children, (child) => {
        return (
          <Flex
            alignItems="center"
            justifyContent="center"
            gap="xs"
            className={classnames(
              styles.main,
              active && styles.active,
              disabled && styles.disabled,
            )}
            onClick={() => {
              if (disabled) {
                return;
              }
              onClick?.(value);
            }}
          >
            {child}
          </Flex>
        );
      })}
    </>
  );
};
