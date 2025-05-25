import { ColorTheme, ColorType, ComponentState } from "../types/color.types";
import { Colors } from "./colors";
import { Shade } from "../core/colors.core";

type RecordKey = string | number | symbol;

export type ComponentColor<Variant, Props, State = Partial<ComponentState>> = {
  [type in ColorType]: Record<
    Variant & RecordKey,
    Record<State & RecordKey, Props>
  >;
};

export abstract class ComponentColors<Variant, Props, State> extends Colors<
  ComponentColor<Variant, Props, State>
> {
  private readonly variants: Variant[];
  private readonly states: State[];

  protected constructor(
    shade: Shade,
    variants: Variant[],
    states: State[] = ["default", "hover", "active"] as State[],
  ) {
    super(shade);
    this.variants = variants;
    this.states = states;
    this.colors = this.create();
  }

  injectTheme(
    callback: (data: {
      theme: ColorTheme;
      type: ColorType;
      variant: Variant;
      state: State;
    }) => Props,
  ) {
    const componentColors: Record<string, any> = {};

    for (const theme of ComponentColors.getThemes()) {
      if (!componentColors[theme]) {
        componentColors[theme] = {};
      }

      for (const type of ComponentColors.types) {
        if (!componentColors[theme][type]) {
          componentColors[theme][type] = {};
        }

        for (const variant of this.variants) {
          if (!componentColors[theme][type][variant]) {
            componentColors[theme][type][variant] = {};
          }

          for (const state of this.states) {
            componentColors[theme][type][variant][state] = callback({
              theme,
              type,
              variant,
              state,
            });
          }
        }
      }
    }

    return componentColors as Record<
      ColorTheme,
      ComponentColor<Variant, Props, State>
    >;
  }
}
