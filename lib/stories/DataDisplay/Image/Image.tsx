import {
  DetailedHTMLProps,
  FC,
  ImgHTMLAttributes,
  ReactNode,
  useCallback,
  useState,
} from "react";
import classnames from "classnames";

import styles from "./Image.module.css";

import { createClassName } from "../../../helpers/createClassName.tsx";

import { Props as SkeletonProps, Skeleton } from "../../Feedback/Skeleton";
import BrokenImage from "../../Icons/assets/BrokenImage.tsx";
import { Box } from "../../../main.ts";
import { halfTheValue } from "../../../helpers/skinning.tsx";

type Props = {
  children?: ReactNode;
  src?: string | ReactNode;
  alt?: string;
  width?: number | string;
  height?: number | string;
  skeleton?: SkeletonProps["variant"];
} & DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;

export const Image: FC<Props> = ({
  children,
  src,
  title,
  alt,
  width,
  height,
  skeleton,
  className,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const classNameVal = classnames(
    createClassName("img"),
    styles.main,
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

  return (
    <>
      {isLoading && (
        <Skeleton variant={skeleton} width={width} height={height} />
      )}
      <img
        {...props}
        src={src}
        alt={alt}
        title={title || alt}
        width={width}
        height={height}
        className={classNameVal}
        onLoad={onLoad}
        onError={onError}
        aria-hidden={isLoading && "true"}
        aria-label={title || alt}
      />
    </>
  );
};
