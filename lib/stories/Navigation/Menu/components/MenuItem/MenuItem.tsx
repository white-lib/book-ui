import { Box } from "lib/stories/Layout/Box";
import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react";

import styles from "./MenuItem.module.scss";
import classnames from "classnames";

type Props = {
  children?: ReactNode;
  onClick?: () => void;
  onOutsideClick?: () => void;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const MenuItem: FC<Props> = ({
  children,
  onClick,
  onOutsideClick,
  ...props
}) => {
  return (
    <Box
      className={classnames(styles.main, onClick && styles.clickable)}
      onClick={() => {
        onClick?.();
        if (onClick) {
          onOutsideClick?.();
        }
      }}
      {...props}
    >
      {children}
    </Box>
  );
};
