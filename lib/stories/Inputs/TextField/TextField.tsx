"use client";

import {
  FC,
  DetailedHTMLProps,
  ReactNode,
  InputHTMLAttributes,
  useState,
  useMemo,
  ChangeEvent,
  useEffect,
} from "react";
import classnames from "classnames";

import inputStyles from "./../Inputs.module.css";
import styles from "./TextField.module.css";

import { withClassPrefix, createClassName } from "lib/helpers/classNames.tsx";

import { Typography } from "lib/stories/DataDisplay/Typography";
import { Box } from "lib/stories/Layout/Box";

import Visibility from "../../Icons/assets/Visibility.tsx";
import VisibilityOff from "../../Icons/assets/VisibilityOff.tsx";

import { DEFAULT_SIZE, Size } from "lib/system/measurement.types.ts";
import { ColorType, DEFAULT_COLOR } from "lib/system/color.types.ts";

export type Props = {
  variant?: "standard" | "outlined" | "filled" | "borderless";
  size?: Size;
  color?: ColorType;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  helperText?: string;
  error?: boolean;
  errorText?: string;
  loading?: boolean;
  required?: boolean;
  fullWidth?: boolean;
  inputDisabled?: boolean;
} & Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "size" | "children"
>;

export const TextField: FC<Props> = ({
  variant = "standard",
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
  type = "text",
  className,
  placeholder,
  disabled,
  inputDisabled,
  startIcon,
  endIcon,
  helperText,
  error,
  errorText,
  loading,
  required,
  fullWidth,
  value = "",
  onChange,
  style,
  ...props
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [innerValue, setInnerValue] = useState(value);

  const classNameVal = classnames(
    withClassPrefix("txtf"),
    inputStyles.main,
    inputStyles[color],
    inputStyles[variant],
    createClassName({ size }),
    error && inputStyles.error,
    disabled && inputStyles.disabled,
    className,
  );

  useEffect(() => {
    setInnerValue(value);
  }, [value]);

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
      <Box className={classNameVal} style={style}>
        {startIcon}
        <input
          type={localType}
          disabled={disabled || inputDisabled}
          placeholder={requiredPlaceholder}
          value={innerValue}
          onChange={handleOnChange}
          {...props}
        />
        {endIcon}
      </Box>
      {helperText && !error && (
        <Typography variant="hint">{helperText}</Typography>
      )}
      {error && errorText && (
        <Typography variant="hint" error>
          {errorText}
        </Typography>
      )}
    </Box>
  );
};
