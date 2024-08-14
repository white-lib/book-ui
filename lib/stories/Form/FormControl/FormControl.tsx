import { DetailedHTMLProps, FC, FormHTMLAttributes } from "react";
import classnames from "classnames";

import styles from "./FormControl.module.css";

import { createClassName } from "../../../helpers/createClassName.tsx";

type Props = { fullWidth?: boolean } & DetailedHTMLProps<
  FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>;

export const FormControl: FC<Props> = ({
  children,
  fullWidth,
  className,
  ...props
}) => {
  const classNameVal = classnames(
    createClassName("form"),
    styles.main,
    fullWidth && styles.fullWidth,
    className,
  );

  return (
    <form {...props} className={classNameVal}>
      {children}
    </form>
  );
};
