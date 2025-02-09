import {
  cloneElement,
  DetailedHTMLProps,
  FC,
  LabelHTMLAttributes,
  ReactElement,
  ReactNode,
} from "react";
import classnames from "classnames";

import styles from "./FormControlLabel.module.css";

import {
  createClassName,
  createSizeClassName,
} from "../../../helpers/createClassName.tsx";
import { DEFAULT_SIZE, Size } from "../../../system/measurement.types.ts";

type Props = {
  label?: string;
  control?: ReactNode;
  size?: Size;
  disabled?: boolean;
  name?: string;
  value?: string;
  selectedValue?: string;
} & DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;

export const FormControlLabel: FC<Props> = ({
  control,
  size = DEFAULT_SIZE,
  label,
  name,
  value,
  className,
  selectedValue,
  ...props
}) => {
  const classNameVal = classnames(
    createClassName("clabel"),
    createSizeClassName(size),
    styles.main,
    className,
  );

  return (
    <label {...props} className={classNameVal}>
      {cloneElement(control as ReactElement, {
        id: value,
        name,
        value,
        checked: selectedValue === value,
      })}
      {label && <span>{label}</span>}
    </label>
  );
};
