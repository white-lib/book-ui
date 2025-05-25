import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import classnames from "classnames";

import styles from "./CardContent.module.css";
import { Box } from "../../../../Layout/Box";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const CardContent: FC<Props> = ({ className, children, ...props }) => {
  const classNameVal = classnames(styles.main, className);

  return (
    <Box {...props} className={classNameVal}>
      {children}
    </Box>
  );
};
