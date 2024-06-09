import { DetailedHTMLProps, FC, FormHTMLAttributes } from "react";
import classnames from "classnames";

import styles from "./FormControl.module.scss";

import { createClassName } from "../../../helpers/createClassName.tsx";

type Props = DetailedHTMLProps<
  FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>;

export const FormControl: FC<Props> = ({ children, className, ...props }) => {
  const classNameVal = classnames(
    createClassName("form"),
    styles.main,
    className,
  );

  return (
    <form {...props} className={classNameVal}>
      {children}
    </form>
  );
};
