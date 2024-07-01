import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import classnames from "classnames";

import styles from "./FormControl.module.css";

import { createClassName } from "../../../helpers/createClassName.tsx";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> &
  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export const FormControl: FC<Props> = ({ children, className, ...props }) => {
  const classNameVal = classnames(
    createClassName("form"),
    styles.main,
    className,
  );

  return (
    <div {...props} className={classNameVal}>
      {children}
    </div>
  );
};
