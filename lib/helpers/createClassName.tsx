import { Size, SizeExt } from "../system/measurement.types.ts";
import { singletonStorage } from "../system/singletonStorage.tsx";

export function createClassName(...names: string[]): string {
  return names
    .map((name) => `${singletonStorage.classPrefix}${name}`)
    .join(" ");
}

export function createSizeClassName(
  size: SizeExt | Size,
  config?: { square?: boolean; paddingX?: boolean; paddingXSmall?: boolean },
): string {
  let base = `size-${size}`;

  if (config?.square) {
    base += "-square";
  }

  if (config?.paddingX) {
    base += ` padding-x-${size}`;
  }

  if (config?.paddingXSmall) {
    base += ` padding-x-small-${size}`;
  }

  return base;
}
