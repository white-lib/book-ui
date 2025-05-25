import { ColorTheme, ColorType, ComponentState } from "../types/color.types";
import { Shade } from "../core/colors.core";

export abstract class Colors<T> {
  protected static readonly themes: ColorTheme[] = ["dark", "light"];
  protected static readonly types: ColorType[] = ["primary", "secondary"];

  protected colors: Record<ColorTheme, T> | undefined;

  protected readonly shade?: Shade;

  protected constructor(shade?: Shade) {
    this.shade = shade;
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

  protected abstract create(): Record<ColorTheme, T> | undefined;
}
