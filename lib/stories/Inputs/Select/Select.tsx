"use client";
import {
  FC,
  DetailedHTMLProps,
  ReactNode,
  SelectHTMLAttributes,
  useState,
  ChangeEvent,
  useMemo,
} from "react";
import classnames from "classnames";

import inputStyles from "./../Inputs.module.css";
import styles from "./Select.module.css";

import { withClassPrefix, createClassName } from "lib/helpers/classNames.tsx";

import { Typography } from "lib/stories/DataDisplay/Typography";
import { Box } from "lib/stories/Layout/Box";

import { DEFAULT_SIZE, Size } from "lib/system/measurement.types.ts";
import { ColorType, DEFAULT_COLOR } from "lib/system/color.types.ts";

export type Props = {
  variant?: "standard" | "outlined" | "filled" | "borderless";
  size?: Size;
  color?: ColorType;
  label?: string;
  startIcon?: ReactNode;
  helperText?: string;
  error?: string;
  loading?: boolean;
  required?: boolean;
  fullWidth?: boolean;
  hideNoneValue?: boolean;
} & Omit<
  DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>,
  "size"
>;

export const Select: FC<Props> = ({
  variant = "standard",
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
  className,
  label,
  disabled,
  startIcon,
  helperText,
  error,
  loading,
  required,
  fullWidth,
  value,
  hideNoneValue,
  children,
  onChange,
  onFocus,
  onBlur,
  ...props
}) => {
  const [innerValue, setInnerValue] = useState(value);

  const classNameVal = classnames(
    withClassPrefix("select"),
    inputStyles.main,
    inputStyles[color],
    inputStyles[variant],
    createClassName({ size }),
    error && inputStyles.error,
    disabled && inputStyles.disabled,
    className,
  );

  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setInnerValue(e.target.value);
    onChange?.(e);
  };

  const requiredLabel = useMemo(
    () => (label ? `${label}${required ? " *" : ""}` : ""),
    [label, required],
  );

  return (
    <Box className={classnames(styles.wrapper, fullWidth && styles.fullWidth)}>
      <Box className={classNameVal}>
        {startIcon}
        <select
          name={label}
          id={label}
          value={innerValue}
          onChange={handleOnChange}
          {...props}
        >
          <option selected disabled>
            {requiredLabel}
          </option>
          {innerValue && !hideNoneValue && <option value={""}>None</option>}
          {children}
        </select>
      </Box>
      {helperText && !error && (
        <Typography variant="hint">{helperText}</Typography>
      )}
      {error && (
        <Typography
          variant="hint"
          className={classnames(error && styles.errorText)}
        >
          {error}
        </Typography>
      )}
    </Box>
  );
};
