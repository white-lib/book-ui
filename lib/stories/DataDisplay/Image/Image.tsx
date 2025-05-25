"use client";

import {
  cloneElement,
  DetailedHTMLProps,
  FC,
  ImgHTMLAttributes,
  ReactNode,
  useCallback,
  useState,
} from "react";

import classnames from "classnames";

import styles from "./Image.module.css";

import { withClassPrefix } from "lib/helpers/classNames.tsx";

import { Props as SkeletonProps, Skeleton } from "../../Feedback/Skeleton";
import BrokenImage from "lib/stories/Icons/assets/BrokenImage.tsx";
import { Box } from "lib/stories/Layout/Box";
import { halfTheValue } from "lib/helpers/skinning.tsx";
import { BaseContextType, useBaseContext } from "lib/system/base.provider.tsx";

export type Props = {
  src?: string | ReactNode;
  alt?: string;
  width?: number | string;
  height?: number | string;
  skeleton?: SkeletonProps["variant"];
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
} & DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> &
  BaseContextType["Img"];

export const Image: FC<Props> = ({
  children,
  src,
  title,
  alt,
  width,
  height,
  objectFit,
  skeleton,
  className,
  ...props
}) => {
  const { Img } = useBaseContext();

  const isBaseImg = Img === "img";

  const [isLoading, setIsLoading] = useState(isBaseImg);
  const [isError, setIsError] = useState(false);

  const classNameVal = classnames(
    withClassPrefix("img"),
    styles.main,
    objectFit && styles[`object-fit-${objectFit}`],
    className,
    isLoading && styles.hidden,
  );

  const onLoad = useCallback(() => {
    // @ts-ignore
    if (window?.CONFIG_TYPE === "DEVELOPMENT") {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      return;
    }

    setIsLoading(false);
  }, [setIsLoading]);

  const onError = useCallback(() => {
    setIsError(true);
  }, []);

  if (isError) {
    return (
      <Box
        style={{ width, height }}
        className={classnames(skeleton && styles[skeleton], styles.error)}
      >
        <BrokenImage
          width={width && halfTheValue(width)}
          height={height && halfTheValue(height)}
        />
      </Box>
    );
  }

  if (isBaseImg) {
    return (
      <>
        {isLoading ? (
          <Skeleton variant={skeleton} width={width} height={height} />
        ) : (
          <></>
        )}
        <img
          src={src}
          alt={alt}
          title={title || alt}
          width={width}
          height={height}
          className={classNameVal}
          onLoad={onLoad}
          onError={onError}
          aria-hidden={isLoading}
          aria-label={title || alt}
          {...props}
        />
      </>
    );
  }

  // @ts-ignore
  return cloneElement(<Img />, {
    src: src,
    alt: alt,
    title: title || alt,
    width: width,
    height: height,
    className: classNameVal,
    onLoad: onLoad,
    onError: onError,
    "aria-hidden": false,
    "aria-label": title || alt,
    ...props,
  });
};
