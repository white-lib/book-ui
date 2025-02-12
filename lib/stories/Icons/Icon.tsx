import { FC } from "react";
import classnames from "classnames";

import styles from "./Link.module.css";
import { withClassPrefix } from "../../helpers/classNames.tsx";
import { unitToPx } from "../../helpers/skinning.tsx";

export type Props = React.SVGProps<SVGSVGElement>;

export const Icon: FC<Props> = ({
  children,
  className,
  name,
  width = "24px",
  height = "24px",
  ...props
}) => {
  const classNameVal = classnames(
    withClassPrefix(`icon-${name}`),
    styles.main,
    className,
  );

  return (
    <svg
      className={classNameVal}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      width={unitToPx(width)}
      height={unitToPx(height)}
      fill="currentColor"
    >
      {children}
    </svg>
  );
};
