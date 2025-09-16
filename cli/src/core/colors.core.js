export class ColorsCore {
    constructor(method, fixShade) {
        this.shades = {
            50: 95,
            100: 90,
            200: 80,
            300: 70,
            400: 60,
            500: 50,
            600: 45,
            700: 35,
            800: 20,
            900: 8,
            950: 5,
        };
        this.method = method;
        this.fixShade = fixShade;
    }
    static hexToHSL(hex) {
        let r = parseInt(hex.slice(1, 3), 16) / 255;
        let g = parseInt(hex.slice(3, 5), 16) / 255;
        let b = parseInt(hex.slice(5, 7), 16) / 255;
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        let h = 1, s, l = (max + min) / 2;
        if (max === min) {
            h = s = 0; // achromatic
        }
        else {
            let d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }
            h *= 60;
        }
        return { h, s: s * 100, l: l * 100 };
    }
    static hslToHex(h, s, l) {
        s /= 100;
        l /= 100;
        let c = (1 - Math.abs(2 * l - 1)) * s;
        let x = c * (1 - Math.abs(((h / 60) % 2) - 1));
        let m = l - c / 2;
        let r, g, b;
        if (h < 60)
            [r, g, b] = [c, x, 0];
        else if (h < 120)
            [r, g, b] = [x, c, 0];
        else if (h < 180)
            [r, g, b] = [0, c, x];
        else if (h < 240)
            [r, g, b] = [0, x, c];
        else if (h < 300)
            [r, g, b] = [x, 0, c];
        else
            [r, g, b] = [c, 0, x];
        return `#${[r, g, b]
            .map((v) => Math.round((v + m) * 255)
            .toString(16)
            .padStart(2, "0"))
            .join("")}`;
    }
    getNearestShade(lightness) {
        const shadeEntries = Object.entries(this.shades);
        return shadeEntries.reduce((closest, [shade, L]) => {
            return Math.abs(L - lightness) <
                Math.abs(this.shades[Number(closest)] - lightness)
                ? shade
                : closest;
        }, shadeEntries[0][0]);
    }
    generateShadesFromMiddle(color) {
        const hsl = ColorsCore.hexToHSL(color);
        const baseShade = 500;
        const baseLightness = this.shades[baseShade];
        const adjustmentFactor = hsl.l / baseLightness;
        return Object.fromEntries(Object.entries(this.shades).map(([val, L]) => {
            const shade = Number(val);
            const inRange = shade > 200 && shade < 900;
            const shadeL = this.shades[shade];
            return [
                shade,
                ColorsCore.hslToHex(hsl.h, hsl.s, inRange ? shadeL * adjustmentFactor : shadeL),
            ];
        }));
    }
    getAnalogousShades(color) {
        const hsl = ColorsCore.hexToHSL(color);
        let colorShades = {};
        const nearestShade = this.getNearestShade(hsl.l);
        for (let shade in this.shades) {
            if (shade === nearestShade) {
                colorShades[shade] = color;
                continue;
            }
            colorShades[shade] = ColorsCore.hslToHex(hsl.h, hsl.s, this.shades[shade]);
        }
        return colorShades;
    }
    generateGrayShades(color) {
        let hsl = ColorsCore.hexToHSL(color);
        if (this.method === "monochromatic") {
            if (hsl.l < 50) {
                hsl = ColorsCore.hexToHSL("#000000");
            }
            else {
                hsl = ColorsCore.hexToHSL("#ffffff");
            }
        }
        let colorShades = {};
        for (let shade in this.shades) {
            let shadeValue = this.shades[shade];
            if (this.method === "monochromatic") {
                if (shade === "50") {
                    shadeValue = 99;
                }
            }
            colorShades[shade] = ColorsCore.hslToHex(hsl.h, (this.shades[shade] / 100) * 10, shadeValue);
        }
        return colorShades;
    }
    generateShades(color, shade) {
        let colors = {};
        const hsl = ColorsCore.hexToHSL(color);
        if (this.fixShade) {
            colors = this.generateShadesFromMiddle(color);
        }
        else {
            colors = this.getAnalogousShades(color);
        }
        if (this.method === "monochromatic") {
            const grayShades = this.generateGrayShades(color);
            colors["50"] = "#ffffff";
            colors["100"] = grayShades["100"];
            colors["900"] = grayShades["950"];
            colors["950"] = "#000000";
        }
        const defaultShade = hsl.l >= 60 ? "light" : "dark";
        return {
            shade: shade || defaultShade,
            colors,
        };
    }
}
//# sourceMappingURL=colors.core.js.map