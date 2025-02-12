import {
  FC,
  DetailedHTMLProps,
  AnchorHTMLAttributes,
  cloneElement,
  useMemo,
} from "react";
import classnames from "classnames";

import styles from "./Link.module.css";

import { withClassPrefix } from "lib/helpers/classNames.tsx";
import { useBaseContext } from "lib/system/base.provider.tsx";

type Props = { disabled?: boolean } & DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export const Link: FC<Props> = ({
  children,
  className,
  disabled,
  onClick,
  ...props
}) => {
  const classNameVal = classnames(
    withClassPrefix("link"),
    styles.main,
    className,
  );

  const { Link } = useBaseContext();

  const dynamicProps = useMemo(() => {
    const dynamicObj: Partial<Props> = {};
    if (disabled) {
      dynamicObj.onClick = (e) => {
        e.preventDefault();
      };
    }
    return dynamicObj;
  }, [disabled]);

  return cloneElement(<Link />, {
    // @ts-ignore
    children: children,
    className: classNameVal,
    to: props.href,
    ...props,
    ...dynamicProps,
  });
};
