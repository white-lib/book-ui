import { FC } from "react";
import classnames from "classnames";

import styles from "./TabsIndicator.module.css";

import { Box } from "lib/stories/Layout/Box";

type Props = object;

export const TabsIndicator: FC<Props> = () => {
  return <Box className={classnames(styles.main)} />;
};
