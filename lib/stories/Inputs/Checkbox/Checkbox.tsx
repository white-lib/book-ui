import { FC, DetailedHTMLProps, InputHTMLAttributes, useState } from "react";
import classnames from "classnames";

import styles from "./Checkbox.module.scss";

import { createClassName } from "../../../helpers/createClassName.tsx";

type Props = {
  size?: "small" | "medium" | "large";
} & Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "size"
>;

export const Checkbox: FC<Props> = ({
  size = "medium",
  className,
  disabled,
  checked,
  onChange,
  ...props
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked || false);

  const classNameVal = classnames(
    createClassName("cb"),
    styles.main,
    styles[size],
    isChecked && styles.checked,
    disabled && "disabled",
    className,
  );

  return (
    <input
      {...props}
      className={classNameVal}
      type="checkbox"
      checked={isChecked}
      disabled={disabled}
      onChange={(e) => {
        setIsChecked((prev) => !prev);
        onChange?.(e);
      }}
    />
  );
};
