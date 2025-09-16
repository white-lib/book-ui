import { PureComponentColors, } from "./pureComponentColors";
export class ContainerColors extends PureComponentColors {
    create() {
        return this.handleOverrides({
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
        }, "container");
    }
}
//# sourceMappingURL=container.colors.js.map