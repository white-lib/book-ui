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

import { createClassName } from "../../../helpers/createClassName.tsx";
import { Box, Typography } from "../../../main.ts";

export type Props = {
  variant?: "standard" | "outlined" | "filled" | "borderless";
  size?: "small" | "medium" | "large";
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
  size = "medium",
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
  const [isFocused, setIsFocused] = useState(false);
  const [innerValue, setInnerValue] = useState(value);

  const classNameVal = classnames(
    createClassName("select"),
    inputStyles.main,
    inputStyles[variant],
    inputStyles[size],
    size && inputStyles[`input-${size}`],
    error && inputStyles.error,
    disabled && inputStyles.disabled,
    className,
  );

  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setInnerValue(e.target.value);
    onChange?.(e);
  };

  const handleOnFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const requiredLabel = useMemo(
    () => (label ? `${label}${required ? " *" : ""}` : ""),
    [label, required],
  );

  return (
    <Box className={classnames(styles.wrapper, fullWidth && styles.fullWidth)}>
      <label htmlFor={label} className={styles.label}>
        {label}
      </label>
      <Box className={classNameVal}>
        {startIcon}
        <select
          name={label}
          id={label}
          value={innerValue}
          onChange={handleOnChange}
          onFocus={handleOnFocus}
          onBlur={handleBlur}
          className={classnames(styles.main)}
          {...props}
        >
          <option selected disabled hidden={variant === "standard"}>
            {variant !== "standard" ? requiredLabel : ""}
          </option>
          {innerValue && !hideNoneValue && <option value={""}>None</option>}
          {children}
        </select>
      </Box>
      {label && variant === "standard" && (
        <Typography
          variant="hint"
          className={classnames(
            styles.focusedTitle,
            (isFocused || innerValue) && styles.focused,
            startIcon && styles.withStartIcon,
          )}
        >
          {requiredLabel}
        </Typography>
      )}
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
