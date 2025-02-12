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

export const CardActions: FC<Props> = ({
  disableSpacing,
  children,
  end,
  ...props
}) => {
  const classNameVal = classnames(
    styles.main,
    disableSpacing && styles.disableSpacing,
    end && styles.end,
  );

  return (
    <Box {...props} className={classNameVal}>
      {Children.map(children, (child) =>
        cloneElement(child as ReactElement<any>, {
          disableSpacing,
        }),
      )}
    </Box>
  );
};
