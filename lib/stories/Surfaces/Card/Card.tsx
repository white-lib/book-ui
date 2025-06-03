import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import classnames from "classnames";

import styles from "./Card.module.css";

import { withClassPrefix } from "../../../helpers/classNames.tsx";
import { Box } from "../../Layout/Box";

type Props = { topSpace?: boolean; bottomSpace?: boolean } & DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const Card: FC<Props> = ({
  topSpace = true,
  bottomSpace = true,
  children,
  ...props
}) => {
  const classNameVal = classnames(
    withClassPrefix("card"),
    styles.main,
    topSpace && styles.topSpace,
    bottomSpace && styles.bottomSpace,
    props.className,
  );

  return (
    <Box {...props} className={classNameVal}>
      {children}
    </Box>
  );
};
