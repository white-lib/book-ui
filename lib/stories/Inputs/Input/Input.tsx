"use client";

import {
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
import styles from "./Input.module.css";

import { withClassPrefix, createClassName } from "lib/helpers/classNames.tsx";

import { Text } from "lib/stories/DataDisplay/Text";
import { Box } from "lib/stories/Layout/Box";
import { Flex } from "lib/stories/Layout/Flex";

import Visibility from "../../Icons/assets/Visibility.tsx";
import VisibilityOff from "../../Icons/assets/VisibilityOff.tsx";

import { DEFAULT_SIZE, Size } from "lib/system/measurement.types.ts";
import { ColorType, DEFAULT_COLOR } from "lib/system/color.types.ts";

export type Props = {
  variant?: "standard" | "outlined" | "filled" | "borderless";
  size?: Size;
  color?: ColorType;
  startItem?: ReactNode;
  endItem?: ReactNode;
  helperText?: string;
  error?: boolean;
  errorText?: string;
  loading?: boolean;
  required?: boolean;
  fullWidth?: boolean;
  inputDisabled?: boolean;
  children?: ReactNode;
  inputSize?: HTMLInputElement["size"];
} & Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "size" | "children"
>;

export const Input = ({
  variant = "standard",
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
  type = "text",
  className,
  placeholder,
  disabled,
  inputDisabled,
  startItem,
  endItem,
  helperText,
  error,
  errorText,
  loading,
  required,
  fullWidth,
  value = "",
  onChange,
  style,
  inputSize,
  children,
  onClick,
  ...props
}: Props) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [innerValue, setInnerValue] = useState(value);

  const classNameVal = classnames(
    withClassPrefix("input"),
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
      endItem = <Visibility onClick={() => setPasswordVisible(true)} />;
    } else {
      endItem = <VisibilityOff onClick={() => setPasswordVisible(false)} />;
    }
  }

  return (
    <Box className={classnames(styles.wrapper, fullWidth && styles.fullWidth)}>
      <Box className={classNameVal} style={style}>
        {startItem}
        <Flex
          alignItems="center"
          justifyContent="center"
          className={styles.inputContent}
          onClick={onClick}
        >
          {children}
          <input
            type={localType}
            disabled={disabled || inputDisabled}
            placeholder={requiredPlaceholder}
            value={innerValue}
            onChange={handleOnChange}
            {...props}
            size={inputSize}
          />
        </Flex>
        {endItem}
      </Box>
      {helperText && !error && <Text variant="hint">{helperText}</Text>}
      {error && errorText && (
        <Text variant="hint" error>
          {errorText}
        </Text>
      )}
    </Box>
  );
};
