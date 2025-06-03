import { FC, DetailedHTMLProps, InputHTMLAttributes } from "react";
import classnames from "classnames";

import styles from "./Switch.module.css";

import { withClassPrefix, createClassName } from "lib/helpers/classNames.tsx";

import { DEFAULT_SIZE, Size } from "lib/system/measurement.types.ts";
import { DEFAULT_COLOR } from "lib/system/color.types.ts";

type Props = {
  size?: Size;
} & Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "size"
>;

export const Switch: FC<Props> = ({
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
  className,
  disabled,
  checked,
  onChange,
  ...props
}) => {
  const classNameVal = classnames(
    withClassPrefix("sw"),
    styles.main,
    styles[color],
    createClassName({ size }),
    checked && styles.checked,
    disabled && "disabled",
    className,
  );

  return (
    <label className={classNameVal}>
      <input
        {...props}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => {
          // setIsChecked((prev) => !prev);
          onChange?.(e);
        }}
      />
      <span className={styles.slider}></span>
    </label>
  );
};
