import { ComponentState, ShadeValue } from "../types/color.types";
import { ComponentColors } from "./componentColors";
import { Shade } from "../core/colors.core";

export type ButtonVariant = "contained" | "outlined" | "text";
export type ButtonState = Omit<ComponentState, "checked">;

export type Props = {
  bg: ShadeValue;
  text: ShadeValue;
  borderColor: ShadeValue;
};

export class ButtonColors extends ComponentColors<
  ButtonVariant,
  Props,
  ButtonState
> {
  private static readonly variants: ButtonVariant[] = [
    "contained",
    "outlined",
    "text",
  ];

  constructor(shade: Shade) {
    super(shade, ButtonColors.variants);
  }

  private getLightThemeColors(variant: ButtonVariant, state: ButtonState) {
    const props: Props = {
      bg: 0,
      text: 0,
      borderColor: null,
    };

    switch (variant) {
      case "contained":
        props.text = this.isLight() ? 900 : 50;
        break;
    }

    switch (state) {
      case "default":
        switch (variant) {
          case "contained":
            props.bg = 500;
            break;
          case "outlined":
            props.text = this.isLight() ? 800 : 500;
            props.borderColor = this.isLight() ? 800 : 500;
            break;
          case "text":
            props.text = 950;
            break;
        }
        break;
      case "hover":
        switch (variant) {
          case "contained":
            props.bg = 600;
            break;
          case "outlined":
            props.bg = this.isLight() ? 600 : 500;
            props.text = this.isLight() ? 900 : 50;
            props.borderColor = this.isLight() ? 600 : 500;
            break;
          case "text":
            props.bg = this.isLight() ? 600 : 500;
            props.text = this.isLight() ? 900 : 50;
            break;
        }
        break;
      case "active":
        switch (variant) {
          case "contained":
            props.bg = 700;
            break;
          case "outlined":
            props.bg = this.isLight() ? 700 : 400;
            props.text = this.isLight() ? 900 : 50;
            props.borderColor = this.isLight() ? 700 : 400;
            break;
          case "text":
            props.bg = this.isLight() ? 700 : 400;
            props.text = this.isLight() ? 900 : 50;
            break;
        }
    }

    return props;
  }

  protected getDarkThemeColors(variant: ButtonVariant, state: ButtonState) {
    const props: Props = {
      bg: null,
      text: null,
      borderColor: null,
    };

    if (variant === "text") {
      props.text = 50;
    }

    return props;
  }

  protected create() {
    return this.injectTheme(({ theme, variant, state }) => {
      if (theme === "light") {
        return this.getLightThemeColors(variant, state);
      }

      return this.getDarkThemeColors(variant, state);
    });
  }
}
