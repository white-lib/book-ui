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

import inputStyles from "./../Inputs.module.css";
import styles from "./TextField.module.css";

import { createClassName } from "../../../helpers/createClassName.tsx";
import { Box, Typography } from "../../../main.ts";

import Visibility from "../../Icons/assets/Visibility.tsx";
import VisibilityOff from "../../Icons/assets/VisibilityOff.tsx";

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

export const TextField: FC<Props> = ({
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
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [innerValue, setInnerValue] = useState(value);

  const classNameVal = classnames(
    createClassName("txtf"),
    inputStyles.main,
    inputStyles[variant],
    inputStyles[size],
    size && inputStyles[`input-${size}`],
    error && inputStyles.error,
    disabled && inputStyles.disabled,
    className,
  );

  const localType = useMemo(() => {
    if (passwordVisible) {
      return "text";
    }

    return type;
  }, [type, passwordVisible]);

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

  if (type === "password") {
    if (!passwordVisible) {
      endIcon = <Visibility onClick={() => setPasswordVisible(true)} />;
    } else {
      endIcon = <VisibilityOff onClick={() => setPasswordVisible(false)} />;
    }
  }

  return (
    <Box className={classnames(styles.wrapper, fullWidth && styles.fullWidth)}>
      <Box className={classNameVal}>
        {startIcon}
        <input
          type={localType}
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
