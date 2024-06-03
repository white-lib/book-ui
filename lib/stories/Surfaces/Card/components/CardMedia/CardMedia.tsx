import { DetailedHTMLProps, FC, ImgHTMLAttributes, ReactNode } from "react";
import classnames from "classnames";

import styles from "./CardMedia.module.scss";

import { createClassName } from "../../../../../helpers/createClassName.tsx";

type Props = {
  src?: string | ReactNode;
  alt?: string;
  width?: number | string;
  height?: number | string;
} & DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;

export const CardMedia: FC<Props> = ({
  src,
  alt,
  width = "100%",
  height = "190px",
  ...props
}) => {
  const classNameVal = classnames(createClassName("card"), styles.main);

  return (
    <img
      {...props}
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={classNameVal}
    />
  );
};
