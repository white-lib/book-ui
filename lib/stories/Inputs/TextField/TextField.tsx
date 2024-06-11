import { FC, DetailedHTMLProps, ReactNode, InputHTMLAttributes } from "react";
import classnames from "classnames";

import styles from "./TextField.module.scss";
import { createClassName } from "../../../helpers/createClassName.tsx";
// import LoadingIcon from "../../Icons/assets/Loading.tsx";

export type Props = {
  variant?: "standard" | "outlined" | "filled";
  size?: "small" | "medium" | "large";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  loading?: boolean;
  disableSpacing?: boolean;
} & Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "size" | "children"
>;

export const TextField: FC<Props> = ({
  variant = "contained",
  size = "medium",
  type = "text",
  className,
  disabled,
  startIcon,
  endIcon,
  loading,
  disableSpacing,
  ...props
}) => {
  const classNameVal = classnames(
    createClassName("txtf"),
    styles.main,
    styles[variant],
    styles[size],
    disabled && styles.disabled,
    disableSpacing && styles.disableSpacing,
    className,
  );

  // const modifiedChildren = (
  //   <>
  //     {loading ? <LoadingIcon /> : startIcon}
  //     {endIcon}
  //   </>
  // );

  return (
    <input
      type={type}
      className={classNameVal}
      disabled={disabled}
      {...props}
    />
  );
};
