import { FC, DetailedHTMLProps, InputHTMLAttributes, useState } from "react";
import classnames from "classnames";

import styles from "./Checkbox.module.css";

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

export const Checkbox: FC<Props> = ({
  size = DEFAULT_SIZE,
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
    createSizeClassName(size),
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
