import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import classnames from "classnames";

import styles from "./CardContent.module.scss";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const CardContent: FC<Props> = ({ children, ...props }) => {
  const classNameVal = classnames(styles.main);

  return (
    <div {...props} className={classNameVal}>
      {children}
    </div>
  );
};
