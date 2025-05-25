import { Box } from "lib/stories/Layout/Box";
import { FC, ReactNode } from "react";
import classnames from "classnames";

import styles from "./MenuTrigger.module.css";

type Props = {
  children?: ReactNode;
  onMenuTriggerClick?: () => void;
  triggerOnHover?: boolean;
  className?: string;
};

export const MenuTrigger: FC<Props> = ({
  onMenuTriggerClick,
  triggerOnHover = false,
  className,
  children,
}) => {
  return (
    <Box
      className={classnames(styles.main, className)}
      onClick={onMenuTriggerClick}
      onMouseEnter={triggerOnHover ? onMenuTriggerClick : undefined}
      onMouseLeave={triggerOnHover ? onMenuTriggerClick : undefined}
    >
      {children}
    </Box>
  );
};
