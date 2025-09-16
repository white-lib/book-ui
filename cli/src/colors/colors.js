export class Colors {
    static transformPropertyName(value) {
        return String(value).charAt(0).toUpperCase() + String(value).slice(1);
    }
    constructor(shade, override) {
        this.shade = shade;
        this.override = override;
    }
    static getThemes() {
        return Colors.themes;
    }
    isLight() {
        return this.shade === "light";
    }
    isDark() {
        return this.shade === "dark";
    }
    getFullColors() {
        return this.colors;
    }
    getColors(theme) {
        return this.colors?.[theme] || {};
    }
    handleOverridesByTheme(theme, component) {
        const overrided = this.override?.[theme]?.[component];
        if (!overrided) {
            return {};
        }
        const propsToReplace = {};
        for (const property in overrided) {
            const propertyName = Colors.transformPropertyName(property);
            propsToReplace[`${component}${propertyName}`] = overrided[property];
        }
        return propsToReplace;
    }
    handleOverrides(variables, component) {
        if (!this.override) {
            return variables;
        }
        // const lightOverrides = this.handleOverridesByTheme("light", component);
        const darkOverrides = this.handleOverridesByTheme("dark", component);
        // @ts-ignore
        if (variables?.["dark"]) {
            // @ts-ignore
            variables["dark"] = {
                // @ts-ignore
                ...variables["dark"],
                ...darkOverrides,
            };
        }
        return variables;
    }
}
Colors.themes = ["dark", "light"];
Colors.types = ["primary", "secondary"];
//# sourceMappingURL=colors.js.map