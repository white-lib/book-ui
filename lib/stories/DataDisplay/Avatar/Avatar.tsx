import { DetailedHTMLProps, FC, ImgHTMLAttributes, ReactNode } from "react";
import classnames from "classnames";

import styles from "./Avatar.module.css";

import { createClassName } from "../../../helpers/createClassName.tsx";
import { Box } from "../../Layout/Box";
import { Image } from "../Image";

type Props = {
  children?: ReactNode;
  src?: string | ReactNode;
  alt?: string;
  width?: number | string;
  height?: number | string;
} & DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;

const softHexColors: Record<string, string> = {
  a: "#E89BA0",
  b: "#E6B17E",
  c: "#E8D48B",
  d: "#B9E37B",
  e: "#90E3B3",
  f: "#90A9E6",
  g: "#AE90E6",
  h: "#D090E6",
  i: "#E6AE90",
  j: "#E6C590",
  k: "#B3E690",
  l: "#90E6B3",
  m: "#90E3E6",
  n: "#90B1E6",
  o: "#A490E6",
  p: "#CF90E6",
  q: "#E690A9",
  r: "#E6D690",
  s: "#A4E693",
  t: "#90E6A2",
  u: "#90E6D5",
  v: "#90A4E6",
  w: "#A490E6",
  x: "#C690E6",
  y: "#E690AF",
  z: "#E6D290",
};

export const Avatar: FC<Props> = ({
  children,
  src,
  alt,
  width = "40px",
  height = "40px",
  ...props
}) => {
  const classNameVal = classnames(createClassName("tp"), styles.main);

  if (!src) {
    let backgroundColor = "var(--primary-main)";

    if (typeof children === "string") {
      backgroundColor = softHexColors[(children as string).toLowerCase()];
    }

    return (
      <Box
        className={classNameVal}
        style={{
          width,
          height,
          backgroundColor,
        }}
      >
        {children}
      </Box>
    );
  }

  return (
    <Image
      {...props}
      skeleton="circular"
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={classNameVal}
    />
  );
};
