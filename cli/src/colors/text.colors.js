import { PureComponentColors, } from "./pureComponentColors";
export class TextColors extends PureComponentColors {
    create() {
        return {
            light: {
                textColor: {
                    type: "gray",
                    shade: 900,
                },
                textInvertColor: {
                    type: "common",
                    shade: "white",
                },
                textHeadingColor: {
                    type: "primary",
                    shade: 900,
                },
                textHintColor: {
                    type: "gray",
                    shade: 500,
                },
                textLinkColor: {
                    type: "gray",
                    shade: 900,
                },
            },
            dark: {
                textColor: {
                    type: "gray",
                    shade: 50,
                },
                textInvertColor: "#000000",
                textHeadingColor: {
                    type: "primary",
                    shade: 50,
                },
                textHintColor: {
                    type: "gray",
                    shade: 300,
                },
                textLinkColor: {
                    type: "gray",
                    shade: 50,
                },
            },
        };
    }
}
//# sourceMappingURL=text.colors.js.map