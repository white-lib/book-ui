import { ComponentColors } from "./componentColors";
export class InputColors extends ComponentColors {
    constructor() {
        super("light", InputColors.variants, InputColors.states);
    }
    getLightThemeColors(type, variant, state) {
        const props = {
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
    create() {
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
InputColors.variants = [
    "standard",
    "outlined",
    "filled",
    "borderless",
];
InputColors.states = [
    "default",
    "hover",
    "checked",
];
//# sourceMappingURL=input.colors.js.map