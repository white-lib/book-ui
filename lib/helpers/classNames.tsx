import { Size, SizeExt } from "../system/measurement.types.ts";
import { singletonStorage } from "../system/singletonStorage.tsx";

export type FlexDirection = "row" | "column" | "row-reverse" | "column-reverse";

export type JustifyContent =
  | "flex-start"
  | "center"
  | "flex-end"
  | "space-between";

export type AlignItems = "flex-start" | "center" | "flex-end";

export function withClassPrefix(...names: string[]): string {
  return names
    .map((name) => `${singletonStorage.classPrefix}${name}`)
    .join(" ");
}

export function createClassName({
  size,
  paddingX,
  paddingXSmall,
  justifyContent,
  alignItems,
}: {
  size?: SizeExt | Size;
  paddingX?: boolean;
  paddingXSmall?: boolean;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
}): string {
  let base = ``;

  if (size) {
    base += `bu-size-${size}`;
  }

  if (paddingX) {
    base += ` padding-x-${size}`;
  }

  if (paddingXSmall) {
    base += ` padding-x-small-${size}`;
  }

  if (justifyContent) {
    base += ` justify-content-${justifyContent}`;
  }

  if (alignItems) {
    base += ` align-items-${alignItems}`;
  }

  return base;
}
