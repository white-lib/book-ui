import {
  cloneElement,
  DetailedHTMLProps,
  FC,
  LabelHTMLAttributes,
  ReactElement,
  ReactNode,
} from "react";
import classnames from "classnames";

import styles from "./FormControlLabel.module.scss";

import { createClassName } from "../../../helpers/createClassName.tsx";

type Props = {
  label?: string;
  control?: ReactNode;
  disabled?: boolean;
  name?: string;
  value?: string;
  selectedValue?: string;
} & DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;

export const FormControlLabel: FC<Props> = ({
  control,
  label,
  name,
  value,
  className,
  selectedValue,
  ...props
}) => {
  const classNameVal = classnames(
    createClassName("clabel"),
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
