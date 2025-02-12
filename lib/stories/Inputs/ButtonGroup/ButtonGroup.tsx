import {
  FC,
  DetailedHTMLProps,
  HTMLAttributes,
  Children,
  cloneElement,
  ReactElement,
} from "react";
import classnames from "classnames";

import { withClassPrefix } from "lib/helpers/classNames.tsx";

import { Props as ButtonProps } from "../Button/Button.tsx";

import styles from "./ButtonGroup.module.css";
import { Box } from "../../Layout/Box";
import { DEFAULT_COLOR } from "lib/system/color.types.ts";

type Props = { orientation?: "horizontal" | "vertical" } & Pick<
  ButtonProps,
  "variant" | "color"
> &
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const ButtonGroup: FC<Props> = ({
  children,
  className,
  variant = "contained",
  orientation = "horizontal",
  color = DEFAULT_COLOR,
  ...props
}) => {
  const classNameVal = classnames(
    withClassPrefix("btn-group"),
    styles.main,
    styles[variant],
    styles[orientation],
    className,
  );

  return (
    <Box {...props} className={classNameVal}>
      {Children.map(children, (child) =>
        cloneElement(child as ReactElement<any>, {
          variant,
          color,
        }),
      )}
    </Box>
  );
};
