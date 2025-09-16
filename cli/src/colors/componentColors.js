import { Colors } from "./colors";
export class ComponentColors extends Colors {
    constructor(shade, variants, states = ["default", "hover", "active"]) {
        super(shade);
        this.variants = variants;
        this.states = states;
        this.colors = this.create();
    }
    injectTheme(callback) {
        const componentColors = {};
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
        return componentColors;
    }
}
//# sourceMappingURL=componentColors.js.map