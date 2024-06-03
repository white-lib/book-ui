import {
  Children,
  cloneElement,
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  ReactElement,
} from "react";
import classnames from "classnames";

import styles from "./CardActions.module.scss";

type Props = { disableSpacing?: boolean } & DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const CardActions: FC<Props> = ({
  disableSpacing,
  children,
  ...props
}) => {
  const classNameVal = classnames(styles.main);

  return (
    <div {...props} className={classNameVal}>
      {Children.map(children, (child) =>
        cloneElement(child as ReactElement, {
          disableSpacing,
        }),
      )}
    </div>
  );
};
