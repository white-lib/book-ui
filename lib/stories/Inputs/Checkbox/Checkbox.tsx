import { FC, DetailedHTMLProps, InputHTMLAttributes, useState } from "react";
import classnames from "classnames";

import styles from "./Checkbox.module.scss";

import { createClassName } from "../../../helpers/createClassName.tsx";

export type Props = {
  size?: "small" | "medium" | "large";
  label?: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const Checkbox: FC<Props> = ({
  children,
  size = "medium",
  label,
  className,
  disabled,
  checked,
  onChange,
  ...props
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked || false);

  const classNameVal = classnames(
    createClassName("cckb"),
    styles.main,
    styles[size],
    isChecked && styles.checked,
    disabled && styles.disabled,
    className,
  );

  return (
    <label>
      <input
        {...props}
        className={classNameVal}
        type="checkbox"
        checked={isChecked}
        onChange={(e) => {
          setIsChecked((prev) => !prev);
          onChange?.(e);
        }}
      />
      <span>{label}</span>
    </label>
  );
};
