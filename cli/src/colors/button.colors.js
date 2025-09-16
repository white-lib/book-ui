import { ComponentColors } from "./componentColors";
export class ButtonColors extends ComponentColors {
    constructor(shade) {
        super(shade, ButtonColors.variants);
    }
    getLightThemeColors(variant, state) {
        const props = {
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
    getDarkThemeColors(variant, state) {
        const props = {
            bg: null,
            text: null,
            borderColor: null,
        };
        if (variant === "text") {
            props.text = 50;
        }
        return props;
    }
    create() {
        return this.injectTheme(({ theme, variant, state }) => {
            if (theme === "light") {
                return this.getLightThemeColors(variant, state);
            }
            return this.getDarkThemeColors(variant, state);
        });
    }
}
ButtonColors.variants = [
    "contained",
    "outlined",
    "text",
];
//# sourceMappingURL=button.colors.js.map