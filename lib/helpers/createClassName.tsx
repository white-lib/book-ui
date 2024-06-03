import MainConfig from "../configs/main.config.tsx";

export function createClassName(...names: string[]): string {
  return names
    .map((name) => `${MainConfig.VITE_CLASSNAME_PREFIX}${name}`)
    .join(" ");
}
