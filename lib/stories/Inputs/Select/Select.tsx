import {
  FC,
  DetailedHTMLProps,
  ReactNode,
  InputHTMLAttributes,
  useState,
  useMemo,
  ChangeEvent,
} from "react";
import classnames from "classnames";

import styles from "./Select.module.css";
import { createClassName } from "../../../helpers/createClassName.tsx";
import { Box, Typography } from "../../../main.ts";

export type Props = {
  variant?: "standard" | "outlined" | "filled" | "borderless";
  size?: "small" | "medium" | "large";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  helperText?: string;
  error?: string;
  loading?: boolean;
  required?: boolean;
  fullWidth?: boolean;
} & Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "size" | "children"
>;

export const Select: FC<Props> = ({
  variant = "standard",
  size = "medium",
  type = "text",
  className,
  placeholder,
  disabled,
  startIcon,
  endIcon,
  helperText,
  error,
  loading,
  required,
  fullWidth,
  value,
  onChange,
  onFocus,
  onBlur,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [innerValue, setInnerValue] = useState(value);

  const classNameVal = classnames(
    createClassName("txtf"),
    styles.main,
    styles[variant],
    styles[size],
    size && styles[`input-${size}`],
    error && styles.error,
    disabled && styles.disabled,
    className,
  );

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInnerValue(e.target.value);
    onChange?.(e);
  };

  const handleOnFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const requiredPlaceholder = useMemo(
    () => (placeholder ? `${placeholder}${required ? " *" : ""}` : ""),
    [placeholder, required],
  );

  return (
    <Box className={classnames(styles.wrapper, fullWidth && styles.fullWidth)}>
      <Box className={classNameVal}>
        {startIcon}
        <input
          type={type}
          disabled={disabled}
          placeholder={variant === "standard" ? "" : requiredPlaceholder}
          value={innerValue}
          onChange={handleOnChange}
          onFocus={handleOnFocus}
          onBlur={handleBlur}
          {...props}
        />
        {endIcon}
      </Box>
      {placeholder && variant === "standard" && (
        <Typography
          variant="hint"
          className={classnames(
            styles.focusedTitle,
            (isFocused || innerValue) && styles.focused,
          )}
        >
          {requiredPlaceholder}
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
