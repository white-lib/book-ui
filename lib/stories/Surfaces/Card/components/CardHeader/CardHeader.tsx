import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react";
import classnames from "classnames";

import styles from "./CardHeader.module.css";

import { Typography } from "../../../../DataDisplay/Typography";
import { Box } from "../../../../Layout/Box";

type Props = {
  title?: string;
  subheader?: string;
  avatar?: ReactNode;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const CardHeader: FC<Props> = ({
  title,
  subheader,
  avatar,
  ...props
}) => {
  const classNameVal = classnames(styles.main);

  return (
    <Box {...props} className={classNameVal}>
      <Box className={styles.leftSide}>
        {avatar}
        {(title || subheader) && (
          <Box className={classnames(styles.titleSubheader)}>
            {title && <Typography variant="span">{title}</Typography>}
            {subheader && <Typography variant="span">{subheader}</Typography>}
          </Box>
        )}
      </Box>
    </Box>
  );
};
