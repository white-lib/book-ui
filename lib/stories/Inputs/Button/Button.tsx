import {
  FC,
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  ReactNode,
} from "react";
import classnames from "classnames";

import styles from "./Button.module.scss";
import { createClassName } from "../../../helpers/createClassName.tsx";
import { Link } from "../../../main.ts";
import LoadingIcon from "../../Icons/assets/Loading.tsx";

export type Props = {
  variant?: "contained" | "outlined" | "text";
  size?: "small" | "medium" | "large";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  loading?: boolean;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export const Button: FC<Props> = ({
  children,
  variant = "contained",
  size = "medium",
  className,
  disabled,
  href,
  startIcon,
  endIcon,
  loading,
  ...props
}) => {
  const classNameVal = classnames(
    createClassName("btn"),
    styles.main,
    styles[variant],
    styles[size],
    disabled && styles.disabled,
    className,
  );

  const modifiedChildren = (
    <>
      {loading ? <LoadingIcon /> : startIcon}
      {children}
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
