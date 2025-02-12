import { DetailedHTMLProps, FC } from "react";
import classnames from "classnames";

import styles from "./FormLabel.module.css";

import { withClassPrefix } from "../../../helpers/classNames.tsx";

type Props = DetailedHTMLProps<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
>;

export const FormLabel: FC<Props> = ({ children, className, ...props }) => {
  const classNameVal = classnames(
    withClassPrefix("label"),
    styles.main,
    className,
  );

  return (
    <label {...props} className={classNameVal}>
      {children}
    </label>
  );
};
