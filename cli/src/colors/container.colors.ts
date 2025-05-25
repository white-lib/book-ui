import {
  PureComponentColors,
  PureComponentColorWithTheme,
} from "./pureComponentColors";

export class ContainerColors extends PureComponentColors {
  protected create() {
    return {
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
    } satisfies PureComponentColorWithTheme;
  }
}
