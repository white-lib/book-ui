import {
  Children,
  cloneElement,
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  ReactElement,
} from "react";
import classnames from "classnames";

import styles from "./CardActions.module.css";
import { Box } from "../../../../Layout/Box";

type Props = { disableSpacing?: boolean; end?: boolean } & DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const CardActions: FC<Props> = ({ children, end, ...props }) => {
  const classNameVal = classnames(styles.main, end && styles.end);

  return (
    <Box {...props} className={classNameVal}>
      {Children.map(children, (child) =>
        cloneElement(child as ReactElement<any>, {
          ...props,
        }),
      )}
    </Box>
  );
};
