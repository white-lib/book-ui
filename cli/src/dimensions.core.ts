export type SizeValues = Record<string, number>;
export type Sizes = Record<string, string>;

export class DimensionsCore {
  private static readonly htmlFontSize = 16;

  private readonly sizes: SizeValues;

  private readonly baseHeight: number;
  private readonly gap: string;
  private readonly space: string;

  constructor(baseHeight: number) {
    this.sizes = {
      xs: baseHeight * 0.75,
      sm: baseHeight * 0.85,
      md: baseHeight,
      lg: baseHeight * 1.15,
      xl: baseHeight * 1.3,
    };

    this.baseHeight = baseHeight;
    this.gap = this.rem(baseHeight * 0.3);
    this.space = this.rem(baseHeight * 0.2);
  }

  getSizes(): Sizes {
    const sizes: Sizes = {};

    for (const size in this.sizes) {
      sizes[size] = this.rem(this.sizes[size]);
    }

    return sizes;
  }

  getGaps(): Sizes {
    const gaps: Sizes = {};

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

  private rem(pixel: number): string {
    return `${pixel / DimensionsCore.htmlFontSize}rem`;
  }
}
