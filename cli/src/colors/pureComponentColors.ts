import { ColorTheme, ShadeValue, VarColor } from "../types/color.types";
import { Colors } from "./colors";
import { Shade } from "../core/colors.core";

export type PureComponentColor = Record<string, ShadeValue | VarColor>;

export type PureComponentColorWithTheme = Record<
  ColorTheme,
  PureComponentColor
>;

export abstract class PureComponentColors extends Colors<PureComponentColor> {
  public constructor(shade?: Shade) {
    super(shade);
    this.colors = this.create();
  }
}
