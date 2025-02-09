import { FC, DetailedHTMLProps, InputHTMLAttributes } from "react";
import classnames from "classnames";

import styles from "./Radio.module.css";

import {
  createClassName,
  createSizeClassName,
} from "../../../helpers/createClassName.tsx";
import { DEFAULT_SIZE, Size } from "../../../system/measurement.types.ts";

type Props = {
  size?: Size;
} & Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "size"
>;

export const Radio: FC<Props> = ({
  size = DEFAULT_SIZE,
  className,
  disabled,
  checked,
  onChange,
  ...props
}) => {
  const classNameVal = classnames(
    createClassName("rd"),
    styles.main,
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
