import {
  FC,
  DetailedHTMLProps,
  AnchorHTMLAttributes,
  cloneElement,
  useMemo,
} from "react";
import classnames from "classnames";

import styles from "./Link.module.scss";
import { createClassName } from "../../../helpers/createClassName.tsx";
import { useBaseContext } from "../../../system/base.provider.tsx";

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
    createClassName("link"),
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

  return cloneElement(Link, {
    // @ts-ignore
    children: children,
    className: classNameVal,
    ...props,
    ...dynamicProps,
  });
};
