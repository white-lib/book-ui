import { ComponentColors } from "./componentColors";
import { ColorType, ShadeValue, VarColor } from "../types/color.types";

export type InputVariant = "standard" | "outlined" | "filled" | "borderless";

type ComponentState = "default" | "hover" | "checked";

export type Props = {
  bg: VarColor | ShadeValue;
  filledBg: VarColor | ShadeValue;
  border: VarColor | ShadeValue;
  borderFocus: VarColor | ShadeValue;
};

export class InputColors extends ComponentColors<
  InputVariant,
  Props,
  ComponentState
> {
  private static readonly variants: InputVariant[] = [
    "standard",
    "outlined",
    "filled",
    "borderless",
  ];

  private static readonly states: ComponentState[] = [
    "default",
    "hover",
    "checked",
  ];

  constructor() {
    super("light", InputColors.variants, InputColors.states);
  }

  private getLightThemeColors(
    type: ColorType,
    variant: InputVariant,
    state: ComponentState,
  ) {
    const props: Props = {
      bg: null,
      filledBg: null,
      border: null,
      borderFocus: null,
    };

    switch (variant) {
      case "standard":
        props.bg = {
          type: "gray",
          shade: 100,
        };
    }

    // bg: {
    //   type: "gray",
    //       shade: 100,
    // },
    // filledBg: {
    //   type: "gray",
    //       shade: 50,
    // },
    // border: {
    //   type: "gray",
    //       shade: 400,
    // },
    // borderFocus: {
    //   type,
    //       shade: 500,
    // },

    return props;
  }

  protected create() {
    return this.injectTheme(({ theme, type, variant, state }) => {
      if (theme === "light") {
        return this.getLightThemeColors(type, variant, state);
      }

      return {
        bg: null,
        filledBg: null,
        border: null,
        borderFocus: null,
      };
    });
  }
}
