import {
  FC,
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  ReactNode,
} from "react";

import classnames from "classnames";

import styles from "./Button.module.css";

import { withClassPrefix, createClassName } from "lib/helpers/classNames.tsx";

import { Link } from "lib/stories/Navigation/Link";
import LoadingIcon from "lib/stories/Icons/assets/Loading.tsx";

import { DEFAULT_SIZE, Size } from "lib/system/measurement.types.ts";

import { ColorType, DEFAULT_COLOR } from "lib/system/color.types.ts";

export type Props = {
  variant?: "contained" | "outlined" | "text";
  size?: Size;
  color?: ColorType;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  loading?: boolean;
  onlyLoader?: boolean;
  disableSpacing?: boolean;
  fullWidth?: boolean;
  selected?: boolean;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export const Button: FC<Props> = ({
  children,
  variant = "contained",
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
  className,
  disabled,
  selected,
  href,
  startIcon,
  endIcon,
  loading,
  onlyLoader,
  disableSpacing,
  fullWidth,
  ...props
}) => {
  const classNameVal = classnames(
    withClassPrefix("btn"),
    styles.main,
    styles[variant],
    styles[color],
    createClassName({ size, paddingX: true }),
    selected && styles.selected,
    disabled && styles.disabled,
    fullWidth && styles.fullWidth,
    disableSpacing && styles.disableSpacing,
    className,
  );

  const modifiedChildren = (
    <>
      {loading ? <LoadingIcon /> : startIcon}
      {loading && onlyLoader ? <></> : children}
      {endIcon}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classNameVal} disabled={disabled} {...props}>
        {modifiedChildren}
      </Link>
    );
  }

  return (
    <button className={classNameVal} disabled={disabled} {...props}>
      {modifiedChildren}
    </button>
  );
};
