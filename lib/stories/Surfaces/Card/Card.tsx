import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import classnames from "classnames";

import styles from "./Card.module.scss";

import { createClassName } from "../../../helpers/createClassName.tsx";
import { Box } from "../../Layout/Box";

type Props = {} & DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const Card: FC<Props> = ({ children, ...props }) => {
  const classNameVal = classnames(createClassName("card"), styles.main);

  return (
    <Box {...props} className={classNameVal}>
      {children}
    </Box>
  );
};
