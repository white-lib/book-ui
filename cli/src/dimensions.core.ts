export type Sizes = Record<string, string>;

export class DimensionsCore {
  private static readonly htmlFontSize = 16;

  private readonly sizes: Sizes;
  private readonly gap: string;
  private readonly space: string;

  constructor(baseHeight: number) {
    this.sizes = {
      xs: this.rem(baseHeight * 0.75),
      sm: this.rem(baseHeight * 0.85),
      md: this.rem(baseHeight),
      lg: this.rem(baseHeight * 1.15),
      xl: this.rem(baseHeight * 1.3),
    };

    this.gap = this.rem(baseHeight * 0.3);
    this.space = this.rem(baseHeight * 0.2);
  }

  getSizes(): Sizes {
    return this.sizes;
  }

  getGap() {
    return this.gap;
  }

  getSpace() {
    return this.space;
  }

  private rem(pixel: number): string {
    return `${pixel / DimensionsCore.htmlFontSize}rem`;
  }
}
