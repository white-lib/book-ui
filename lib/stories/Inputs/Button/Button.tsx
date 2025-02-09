import {
  FC,
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  ReactNode,
} from "react";

import classnames from "classnames";

import styles from "./Button.module.css";
import {
  createClassName,
  createSizeClassName,
} from "../../../helpers/createClassName.tsx";
import { Link } from "../../../main.ts";
import LoadingIcon from "../../Icons/assets/Loading.tsx";

import { DEFAULT_SIZE, Size } from "../../../system/measurement.types.ts";

export type Props = {
  variant?: "contained" | "outlined" | "text";
  size?: Size;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  loading?: boolean;
  disableSpacing?: boolean;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export const Button: FC<Props> = ({
  children,
  variant = "contained",
  size = DEFAULT_SIZE,
  className,
  disabled,
  href,
  startIcon,
  endIcon,
  loading,
  disableSpacing,
  ...props
}) => {
  const classNameVal = classnames(
    createClassName("btn"),
    styles.main,
    styles[variant],
    createSizeClassName(size, {
      paddingX: true,
    }),
    disabled && styles.disabled,
    disableSpacing && styles.disableSpacing,
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
