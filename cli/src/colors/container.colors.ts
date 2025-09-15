import {
  PureComponentColors,
  PureComponentColorWithTheme,
} from "./pureComponentColors";
import { ColorOverride } from "../types/color.types";

export class ContainerColors extends PureComponentColors {
  protected create() {
    return this.handleOverrides<PureComponentColorWithTheme>(
      {
        light: {
          containerBg: {
            type: "gray",
            shade: 50,
          },
          containerBorderColor: {
            type: "gray",
            shade: 200,
          },
        },
        dark: {
          containerBg: {
            type: "primary",
            shade: 900,
          },
          containerBorderColor: {
            type: "gray",
            shade: 800,
          },
        },
      } satisfies PureComponentColorWithTheme,
      "container",
    );
  }
}
