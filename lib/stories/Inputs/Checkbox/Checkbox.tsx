import { FC, DetailedHTMLProps, InputHTMLAttributes, useState } from "react";
import classnames from "classnames";

import styles from "./Checkbox.module.css";

import { withClassPrefix, createClassName } from "lib/helpers/classNames.tsx";

import { DEFAULT_SIZE, Size } from "lib/system/measurement.types.ts";
import { DEFAULT_COLOR } from "lib/system/color.types.ts";

type Props = {
  size?: Size;
} & Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "size"
>;

export const Checkbox: FC<Props> = ({
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
  className,
  disabled,
  checked,
  onChange,
  ...props
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked || false);

  const classNameVal = classnames(
    withClassPrefix("cb"),
    styles.main,
    styles[color],
    createClassName({ size }),
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
