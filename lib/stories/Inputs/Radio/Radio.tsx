import { FC, DetailedHTMLProps, InputHTMLAttributes } from "react";
import classnames from "classnames";

import styles from "./Radio.module.scss";

import { createClassName } from "../../../helpers/createClassName.tsx";

type Props = {
  size?: "small" | "medium" | "large";
} & Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "size"
>;

export const Radio: FC<Props> = ({
  size = "medium",
  className,
  disabled,
  checked,
  onChange,
  ...props
}) => {
  const classNameVal = classnames(
    createClassName("rd"),
    styles.main,
    styles[size],
    checked && styles.checked,
    disabled && "disabled",
    className,
  );

  return (
    <input
      {...props}
      className={classNameVal}
      type="radio"
      checked={checked}
      disabled={disabled}
      onChange={(e) => {
        onChange?.(e);
      }}
    />
  );
};
