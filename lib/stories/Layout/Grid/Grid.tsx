import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import classnames from "classnames";

import styles from "./Grid.module.css";

import { withClassPrefix } from "lib/helpers/classNames.tsx";

type Cols = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type Spacing = "sm" | "md" | "lg";

type JustifyContent = "flex-start" | "center" | "flex-end" | "space-between";
type AlignItems = "flex-start" | "center" | "flex-end";

type Props = {
  container?: boolean;
  item?: boolean;
  xs?: Cols;
  sm?: Cols;
  md?: Cols;
  lg?: Cols;
  spacing?: Spacing;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const Grid: FC<Props> = ({
  container,
  item,
  xs,
  sm,
  md,
  lg,
  spacing,
  justifyContent,
  alignItems,
  className,
  children,
  ...props
}) => {
  const classNameVal = classnames(
    withClassPrefix("grid"),
    styles.main,
    container && styles.container,
    item && styles.item,
    xs !== undefined && styles[`xs-${xs}`],
    sm !== undefined && styles[`sm-${sm}`],
    md !== undefined && styles[`md-${md}`],
    lg !== undefined && styles[`lg-${lg}`],
    spacing && styles[`spacing-${spacing}`],
    justifyContent && styles[`justifyContent-${justifyContent}`],
    alignItems && styles[`alignItems-${alignItems}`],
    className,
  );

  return (
    <div {...props} className={classNameVal}>
      {children}
    </div>
  );
};
