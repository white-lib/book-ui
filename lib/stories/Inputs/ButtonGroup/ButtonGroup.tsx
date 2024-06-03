import {
  FC,
  DetailedHTMLProps,
  HTMLAttributes,
  Children,
  cloneElement,
  ReactElement,
} from "react";
import classnames from "classnames";

import { createClassName } from "../../../helpers/createClassName.tsx";

import { Props as ButtonProps } from "../Button/Button.tsx";

import styles from "./ButtonGroup.module.scss";

type Props = { orientation?: "horizontal" | "vertical" } & Pick<
  ButtonProps,
  "variant"
> &
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const ButtonGroup: FC<Props> = ({
  children,
  className,
  variant = "contained",
  orientation = "horizontal",
  ...props
}) => {
  const classNameVal = classnames(
    createClassName("btn-group"),
    styles.main,
    styles[variant],
    styles[orientation],
    className,
  );

  return (
    <div {...props} className={classNameVal}>
      {Children.map(children, (child) =>
        cloneElement(child as ReactElement, {
          variant,
        }),
      )}
    </div>
  );
};
