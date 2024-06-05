import { DetailedHTMLProps, FC } from "react";
import classnames from "classnames";

import styles from "./FormLabel.module.scss";

import { createClassName } from "../../../helpers/createClassName.tsx";

type Props = DetailedHTMLProps<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
>;

export const FormLabel: FC<Props> = ({ children, className, ...props }) => {
  const classNameVal = classnames(
    createClassName("label"),
    styles.main,
    className,
  );

  return (
    <label {...props} className={classNameVal}>
      {children}
    </label>
  );
};
