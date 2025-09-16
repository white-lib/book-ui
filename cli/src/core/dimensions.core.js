export class DimensionsCore {
    constructor(baseHeight) {
        this.sizes = {
            xs: baseHeight * 0.5,
            sm: baseHeight * 0.82,
            md: baseHeight,
            lg: baseHeight * 1.15,
            xl: baseHeight * 1.3,
        };
        this.baseHeight = baseHeight;
        this.gap = this.rem(baseHeight * 0.3);
        this.space = this.rem(baseHeight * 0.2);
    }
    getSizes() {
        const sizes = {};
        for (const size in this.sizes) {
            sizes[size] = this.rem(this.sizes[size]);
        }
        return sizes;
    }
    getGaps() {
        const gaps = {};
        for (const size in this.sizes) {
            gaps[size] = this.rem(this.sizes[size] / 2);
        }
        return gaps;
    }
    getGap() {
        return this.gap;
    }
    getHeight() {
        return this.rem(this.baseHeight);
    }
    getSpace() {
        return this.space;
    }
    rem(pixel) {
        return `${(pixel / DimensionsCore.htmlFontSize).toFixed(2)}rem`;
    }
}
DimensionsCore.htmlFontSize = 16;
//# sourceMappingURL=dimensions.core.js.map