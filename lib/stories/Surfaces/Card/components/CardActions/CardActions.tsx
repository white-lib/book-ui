import {
  Children,
  cloneElement,
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  ReactElement,
} from "react";
import classnames from "classnames";

import styles from "./CardActions.module.scss";
import { Box } from "../../../../Layout/Box";

type Props = { disableSpacing?: boolean } & DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const CardActions: FC<Props> = ({
  disableSpacing,
  children,
  ...props
}) => {
  const classNameVal = classnames(styles.main);

  return (
    <Box {...props} className={classNameVal}>
      {Children.map(children, (child) =>
        cloneElement(child as ReactElement, {
          disableSpacing,
        }),
      )}
    </Box>
  );
};
