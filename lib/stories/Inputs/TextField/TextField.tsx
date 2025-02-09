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

import {
  createClassName,
  createSizeClassName,
} from "../../../helpers/createClassName.tsx";
import { Box, Typography } from "../../../main.ts";

import Visibility from "../../Icons/assets/Visibility.tsx";
import VisibilityOff from "../../Icons/assets/VisibilityOff.tsx";

import { DEFAULT_SIZE, Size } from "../../../system/measurement.types.ts";

export type Props = {
  variant?: "standard" | "outlined" | "filled" | "borderless";
  size?: Size;
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
  size = DEFAULT_SIZE,
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
  const [innerValue, setInnerValue] = useState(value);

  const classNameVal = classnames(
    createClassName("txtf"),
    inputStyles.main,
    inputStyles[variant],
    createSizeClassName(size),
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
