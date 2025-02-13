import { FC } from "react";
import classnames from "classnames";

import styles from "./CardMedia.module.css";

import { withClassPrefix } from "lib/helpers/classNames.tsx";
import { Image, Props as ImageProps } from "lib/stories/DataDisplay/Image";

type Props = ImageProps;

export const CardMedia: FC<Props> = ({ src, alt, width, height, ...props }) => {
  const classNameVal = classnames(withClassPrefix("card"), styles.main);

  return (
    <Image
      {...props}
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={classNameVal}
    />
  );
};
