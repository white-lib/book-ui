import {
  ColorOverride,
  ColorTheme,
  ColorType,
  ComponentState,
} from "../types/color.types";
import { Shade } from "../core/colors.core";

export abstract class Colors<T> {
  protected static readonly themes: ColorTheme[] = ["dark", "light"];
  protected static readonly types: ColorType[] = ["primary", "secondary"];

  protected colors: Record<ColorTheme, T> | undefined;

  protected readonly shade?: Shade;
  protected readonly override?: ColorOverride;

  private static transformPropertyName(value: string) {
    return String(value).charAt(0).toUpperCase() + String(value).slice(1);
  }

  protected constructor(shade?: Shade, override?: ColorOverride) {
    this.shade = shade;
    this.override = override;
  }

  protected static getThemes() {
    return Colors.themes;
  }

  isLight(): boolean {
    return this.shade === "light";
  }

  isDark(): boolean {
    return this.shade === "dark";
  }

  getFullColors() {
    return this.colors;
  }

  getColors(theme: ColorTheme) {
    return this.colors?.[theme] || ({} as T);
  }

  private handleOverridesByTheme(theme: ColorTheme, component: string) {
    const overrided = this.override?.[theme]?.[component];

    if (!overrided) {
      return {};
    }

    const propsToReplace: Record<string, any> = {};

    for (const property in overrided) {
      const propertyName = Colors.transformPropertyName(property as string);
      propsToReplace[`${component}${propertyName}`] = overrided[property];
    }

    return propsToReplace;
  }

  protected handleOverrides<T>(variables: T, component: string): T {
    if (!this.override) {
      return variables;
    }

    // const lightOverrides = this.handleOverridesByTheme("light", component);
    const darkOverrides = this.handleOverridesByTheme("dark", component);

    // @ts-ignore
    if (variables?.["dark"]) {
      // @ts-ignore
      variables["dark"] = {
        // @ts-ignore
        ...variables["dark"],
        ...darkOverrides,
      };
    }

    return variables;
  }

  protected abstract create(): Record<ColorTheme, T> | undefined;
}
