"use client";

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
import { BaseContextType, useBaseContext } from "lib/system/base.provider.tsx";

type Props = { disabled?: boolean } & DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> &
  BaseContextType["Link"] & { noUnderline?: boolean };

export const Link: FC<Props> = ({
  children,
  className,
  disabled,
  onClick,
  noUnderline,
  ...props
}) => {
  const classNameVal = classnames(
    withClassPrefix("link"),
    styles.main,
    noUnderline && styles.noUnderline,
    className,
  );

  const { Link } = useBaseContext();

  const isBaseA = Link === "a";

  const dynamicProps = useMemo(() => {
    const dynamicObj: Partial<Props> = {};
    if (disabled) {
      dynamicObj.onClick = (e) => {
        e.preventDefault();
      };
    }
    return dynamicObj;
  }, [disabled]);

  if (isBaseA) {
    return (
      <a className={classNameVal} {...props}>
        {children}
      </a>
    );
  }

  // @ts-ignore
  return cloneElement(<Link />, {
    // @ts-ignore
    children: children,
    className: classNameVal,
    to: props.href,
    ...props,
    ...dynamicProps,
  });
};
