import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react";
import classnames from "classnames";

import styles from "./CardHeader.module.scss";

import { Typography } from "../../../../DataDisplay/Typography";

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
    <div {...props} className={classNameVal}>
      <div className={styles.leftSide}>
        {avatar}
        {(title || subheader) && (
          <div className={classnames(styles.titleSubheader)}>
            {title && <Typography variant="span">{title}</Typography>}
            {subheader && <Typography variant="span">{subheader}</Typography>}
          </div>
        )}
      </div>
    </div>
  );
};
