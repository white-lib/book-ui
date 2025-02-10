import { FC, DetailedHTMLProps, InputHTMLAttributes } from "react";
import classnames from "classnames";

import styles from "./Radio.module.css";

import {
  createClassName,
  createSizeClassName,
} from "lib/helpers/createClassName.tsx";

import { DEFAULT_SIZE, Size } from "lib/system/measurement.types.ts";

import { ColorType, DEFAULT_COLOR } from "lib/system/color.types.ts";

type Props = {
  size?: Size;
  color?: ColorType;
} & Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "size"
>;

export const Radio: FC<Props> = ({
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
  className,
  disabled,
  checked,
  onChange,
  ...props
}) => {
  const classNameVal = classnames(
    createClassName("rd"),
    styles.main,
    styles[color],
    createSizeClassName(size),
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
