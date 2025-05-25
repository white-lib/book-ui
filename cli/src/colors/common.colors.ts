import { PureComponentColors } from "./pureComponentColors";

export class CommonColors extends PureComponentColors {
  protected create() {
    return {
      light: {
        commonWhite: "#ffffff",
        commonBlack: "#000000",
        commonEmptyColor: "#e3e8e4",
        commonFontColor: "#000000",
        commonSuccessColor: "#52c41a",
        commonWarningColor: "#FF9966",
        commonErrorColor: "#ff4d4f",
      },
      dark: {},
    };
  }
}
