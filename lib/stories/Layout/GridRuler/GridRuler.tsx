import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import classnames from "classnames";

import styles from "./GridRuler.module.scss";

import { createClassName } from "../../../helpers/createClassName.tsx";

type Spacing = "sm" | "md" | "lg";

type Props = { spacing?: Spacing } & DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const GridRuler: FC<Props> = ({ spacing, className }) => {
  const classNameVal = classnames(
    createClassName("grid-ruler"),
    styles.main,
    spacing && styles[`spacing-${spacing}`],
    className,
  );

  return (
    <div className={classNameVal}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((number) => (
        <div key={number} className={styles.item} />
      ))}
    </div>
  );
};
