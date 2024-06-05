import { DetailedHTMLProps, FC, ReactNode } from "react";
import classnames from "classnames";

import styles from "./FormControlLabel.module.scss";

import { createClassName } from "../../../helpers/createClassName.tsx";

type Props = {
  label?: string;
  control?: ReactNode;
  disabled?: boolean;
} & DetailedHTMLProps<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
>;

export const FormControlLabel: FC<Props> = ({
  control,
  label,
  className,
  ...props
}) => {
  const classNameVal = classnames(
    createClassName("clabel"),
    styles.main,
    className,
  );

  return (
    <label {...props} className={classNameVal}>
      {control}
      {label && <span>{label}</span>}
    </label>
  );
};
