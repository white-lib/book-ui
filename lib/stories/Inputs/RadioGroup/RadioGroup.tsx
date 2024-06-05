import { FC, DetailedHTMLProps, InputHTMLAttributes, useState } from "react";
import classnames from "classnames";

import styles from "./RadioGroup.module.scss";

import { createClassName } from "../../../helpers/createClassName.tsx";

type Props = {
  size?: "small" | "medium" | "large";
  label?: string;
} & Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "size"
>;

export const RadioGroup: FC<Props> = ({
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
    createClassName("cb"),
    styles.main,
    styles[size],
    isChecked && styles.checked,
    disabled && styles.disabled,
    className,
  );

  return (
    <label className={classnames(styles.label, disabled && styles.disabled)}>
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
      <span>{label}</span>
    </label>
  );
};
