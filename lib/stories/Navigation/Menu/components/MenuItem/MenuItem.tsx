import { Box } from "lib/stories/Layout/Box";
import { FC, ReactNode } from "react";

import styles from "./MenuItem.module.scss";

type Props = {
  children?: ReactNode;
};

export const MenuItem: FC<Props> = ({ children }) => {
  return <Box className={styles.main}>{children}</Box>;
};
