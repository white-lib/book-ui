import { ArrangementCore } from "./arrangement.core";

require("dotenv").config();

import * as fs from "node:fs";

import { Colors, ColorsCore } from "./colors.core";
import { DimensionsCore } from "./dimensions.core";
import { Config } from "./config.core";

export type ColorTypes = keyof Pick<Config, "primary" | "secondary">;

export class ScssRootCore {
  private readonly grayColors: Colors;

  private readonly colorTypes: Record<ColorTypes, Colors | null> = {
    primary: null,
    secondary: null,
  };

  private readonly colorsCore: ColorsCore;
  private readonly dimensionsCore: DimensionsCore;
  private readonly arrangementCore: ArrangementCore;

  constructor(config: Config) {
    this.colorsCore = new ColorsCore(config.method, config.fixShade);
    this.dimensionsCore = new DimensionsCore(config.baseSize);
    this.arrangementCore = new ArrangementCore();

    this.grayColors = this.colorsCore.generateGrayShades(config.primary);

    for (const colorType in this.colorTypes) {
      const color: string = String(config[colorType as keyof Config]);

      if (color === "undefined") {
        continue;
      }

      this.colorTypes[colorType as ColorTypes] =
        this.colorsCore.generateShades(color);
    }
  }

  private withColors(callback: (type: string) => string) {
    let content = "";
    for (const colorType in this.colorTypes) {
      const type = colorType as ColorTypes;

      if (this.colorTypes[type] === null) {
        continue;
      }

      content += callback(type);
    }

    return content;
  }

  private static getRootTag() {
    return `:root {\n`;
  }

  private static getCloseTag() {
    return "}";
  }

  private static getDarkModeTag() {
    return `[data-bu-theme="dark"] {`;
  }

  private static getDarkModeMedia() {
    return `
@media (prefers-color-scheme: dark) {
\t:root:not([data-bu-theme]) {
    `;
  }

  private static getCommonColors() {
    return `
\t--bu-white: #ffffff;
\t--bu-black: #000000;
\t--bu-empty-color: var(--bu-gray-100);
\t--bu-font-color: #000000;
  `;
  }

  private static getSkeletonColors() {
    return `
\t--bu-skeleton-color-1: var(--bu-gray-100);
\t--bu-skeleton-color-2: var(--bu-gray-200);
`;
  }

  private static getContainerVars() {
    return `
\t--bu-container-bg: var(--bu-gray-50);
\t--bu-container-shadow: 0 10px 20px -12px rgba(16,24,40,.1);
\t--bu-container-border: 1px;
\t--bu-container-border-color: var(--bu-gray-200);
\t--bu-container-radius: 0.5rem;
\t--bu-container-space: 0.8rem;
`;
  }

  private static getTextVars() {
    return `
\t--bu-text-color: var(--bu-gray-900); 
\t--bu-text-invert-color: #ffffff; 
\t--bu-text-heading-color: var(--bu-primary-900);
\t--bu-text-hint-color: var(--bu-gray-500); 
`;
  }

  private static getFontFamily() {
    return `
\t--bu-font-family: Inter, -apple-system, "Segoe UI", "Helvetica Neue", Arial,
    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
`;
  }

  private static getDuration() {
    return `
\t--bu-duration-xs: 0.1s;
\t--bu-duration-sm: 0.3s;
\t--bu-duration-md: 0.5s;
\t--bu-duration-lg: 1s;
\t--bu-duration-xl: 2s;
`;
  }

  private static getDisabled() {
    return `
\t--bu-disabled-pointer-events: none;
\t--bu-disabled-cursor: not-allowed;
\t--bu-disabled-filter: grayscale(1);
\t--bu-disabled-opacity: 0.7;
`;
  }

  private static getFontSizes() {
    return `
\t--bu-font-size: 1rem;
\t--bu-font-size-hint: 0.75rem;
`;
  }

  private static getDarkModeColors() {
    return `
\tcolor-scheme: dark;
    
\t--bu-text-color: var(--bu-gray-50); 
\t--bu-text-invert-color: #000000; 
\t--bu-text-heading-color: var(--bu-primary-50); 
\t--bu-text-hint-color: var(--bu-gray-300); 
\t--bu-skeleton-color-1: var(--bu-gray-800);
\t--bu-skeleton-color-2: var(--bu-gray-900);
\t--bu-input-bg: var(--bu-gray-800);

\t--bu-btn-primary-text-bg-hover: var(--bu-primary-800);
\t--bu-btn-primary-text-bg-active: var(--bu-primary-600);

\t--bu-btn-primary-text-color: var(--bu-primary-50);
\t--bu-btn-primary-text-color-active: var(--bu-primary-100);

\t--bu-container-bg: var(--bu-primary-900);
\t--bu-container-shadow: 0 10px 20px -12px rgba(16,24,40,.1);
\t--bu-container-border-color: var(--bu-gray-800);
`;
  }

  private getButtonColors() {
    return this.withColors(
      (type: string) => `
\t--bu-btn-${type}-bg: var(--bu-${type}-500);
\t--bu-btn-${type}-hover: var(--bu-${type}-600);
\t--bu-btn-${type}-active: var(--bu-${type}-700);
\t--bu-btn-${type}-primary-color: var(--bu-white);

\t--bu-btn-${type}-text-bg: transparent;
\t--bu-btn-${type}-text-bg-hover: var(--bu-${type}-200);
\t--bu-btn-${type}-text-bg-active: var(--bu-${type}-400);

\t--bu-btn-${type}-text-color: var(--bu-${type}-950);
\t--bu-btn-${type}-text-color-hover: var(--bu-${type}-50);
\t--bu-btn-${type}-text-color-active: var(--bu-${type}-50);

\t--bu-btn-${type}-outlined-bg-hover: var(--bu-${type}-400);
\t--bu-btn-${type}-outlined-bg-active: var(--bu-${type}-600);

\t--bu-btn-${type}-outlined-color: var(--bu-${type}-500);
\t--bu-btn-${type}-outlined-color-hover: var(--bu-${type}-50);
\t--bu-btn-${type}-outlined-color-active: var(--bu-${type}-50);

\t--bu-btn-${type}-outlined-border: var(--bu-${type}-500);
\t--bu-btn-${type}-outlined-border-hover: var(--bu-${type}-400);
`,
    );
  }

  private getControlVars() {
    return this.withColors(
      (type: string) => `
\t--bu-control-${type}-color: var(--bu-gray-300);
\t--bu-control-${type}-hover: var(--bu-${type}-600);
\t--bu-control-${type}-checked-bg: var(--bu-${type}-500);
\t--bu-control-${type}-mark-color: var(--bu-white);
\t--bu-control-${type}-border-width: 1px;
`,
    );
  }

  private getInputVars() {
    return this.withColors(
      (type: string) => `
\t--bu-input-${type}-bg: var(--bu-gray-100);
\t--bu-input-${type}-border: var(--bu-gray-400);
\t--bu-input-${type}-border-focus: var(--bu-${type}-500);
\t--bu-input-${type}-border-style: solid;
\t--bu-input-${type}-border-width: 1px;
`,
    );
  }

  private getColorsByType() {
    let content = "\n";

    for (const colorType in this.colorTypes) {
      const type = colorType as ColorTypes;

      if (this.colorTypes[type] === null) {
        continue;
      }

      for (const shade in this.colorTypes[type]) {
        content += `\t--bu-${colorType}-${shade}: ${this.colorTypes[type][shade]};\n`;
      }

      content += "\n";
    }

    return content;
  }

  private getNeutralColors() {
    let content = "";
    for (const shade in this.grayColors) {
      content += `\t--bu-gray-${shade}: ${this.grayColors[shade]};\n`;
    }

    return content;
  }

  private fluidText(max: number = 48, min: number = 16) {
    const maxViewportWidth = 1400;
    const minViewportWidth = 360;

    const maxSize = max / 16;
    const minSize = min / 16;
    const maxWidth = maxViewportWidth / 16;
    const minWidth = minViewportWidth / 16;

    const slope = (maxSize - minSize) / (maxWidth - minWidth);
    const yAxisIntersection = -minWidth * slope + minSize;

    return `clamp(${minSize}rem, ${yAxisIntersection}rem + ${slope * 100}vw, ${maxSize}rem)`;
  }

  private getSizes() {
    const sizes = this.dimensionsCore.getSizes();
    let content = `\n`;

    for (const size in sizes) {
      content += `\t--bu-size-${size}: ${sizes[size]};\n`;
    }

    return content;
  }

  private getHeadingSizes() {
    return `
\t--bu-font-size-h1: ${this.fluidText(40, 28)};
\t--bu-font-size-h2: ${this.fluidText(36, 26)}; 
\t--bu-font-size-h3: ${this.fluidText(32, 24)}; 
\t--bu-font-size-h4: ${this.fluidText(28, 22)};
\t--bu-font-size-h5: ${this.fluidText(24, 20)};
\t--bu-font-size-h6: ${this.fluidText(20, 18)};
`;
  }

  private getSpaces() {
    return `
\t--bu-gap: ${this.dimensionsCore.getGap()};
\t--bu-space: ${this.dimensionsCore.getSpace()};
\t--bu-height: ${this.dimensionsCore.getHeight()};
`;
  }

  private getSizeClasses() {
    const sizes = this.dimensionsCore.getSizes();
    let content = `\n`;

    for (const size in sizes) {
      content += `
.bu-size-${size} {
\t--bu-size: var(--bu-size-${size});
\t--bu-height: var(--bu-size-${size});
\t--bu-space: calc(var(--bu-size-${size}) / 2);
\t--bu-radius: calc(var(--bu-size-${size}) / 8);
\t--bu-font-size: calc(var(--bu-size-${size}) / 2.5);
\t--bu-gap: calc(var(--bu-size-${size}) / 6);
\t--bu-height-small: calc(var(--bu-size-${size}) * 0.5);
\t--bu-radius-small: calc(var(--bu-size-${size}) / 10);
\t--bu-space-small: calc(var(--bu-size-${size}) / 4);
}

.padding-x-${size} {
\tpadding-left: var(--bu-space);
\tpadding-right: var(--bu-space);
}
      `;
    }

    return content;
  }

  getArrangementClasses() {
    const justifyContent = this.arrangementCore.getJustifyContent();
    const alignItems = this.arrangementCore.getAlignItems();

    let content = `\n`;

    for (const value of justifyContent) {
      content += `
.justify-content-${value} {
\tjustify-content: ${value};
}
      `;
    }

    content += "\n";

    for (const value of alignItems) {
      content += `
.align-items-${value} {
\talign-items: ${value};
}
      `;
    }

    return content;
  }

  generateScssRootColors(): string {
    let content = ScssRootCore.getRootTag();

    content += this.getColorsByType();

    // colors
    content += this.getNeutralColors();

    content += ScssRootCore.getCommonColors();

    content += this.getButtonColors();

    content += ScssRootCore.getSkeletonColors();

    // inputs
    content += this.getInputVars();

    // controls
    content += this.getControlVars();

    // font
    content += ScssRootCore.getFontFamily();

    // sizes
    content += this.getSizes();

    // Heading font sizes
    content += this.getHeadingSizes();

    // Text vars
    content += ScssRootCore.getTextVars();

    // Container vars
    content += ScssRootCore.getContainerVars();

    // Space
    content += this.getSpaces();

    // Common font sizes
    content += ScssRootCore.getFontSizes();

    // duration
    content += ScssRootCore.getDuration();

    // disabled
    content += ScssRootCore.getDisabled();

    content += ScssRootCore.getCloseTag();

    content += "\n";

    content += this.getSizeClasses();
    // content += this.getArrangementClasses();

    content += "\n";
    content += ScssRootCore.getDarkModeMedia();
    content += ScssRootCore.getDarkModeColors();
    content += ScssRootCore.getCloseTag();
    content += ScssRootCore.getCloseTag();

    content += "\n";
    content += ScssRootCore.getDarkModeTag();
    content += ScssRootCore.getDarkModeColors();
    content += ScssRootCore.getCloseTag();

    return content;
  }

  save(rootVars: string) {
    const outPath = `${__dirname}/../../dist/assets/root.css`;
    const outDevPath = `${__dirname}/../../lib/assets/styles/root.scss`;

    const paths = [outPath];

    if (process.env.CLI_MODE === "development") {
      paths.push(outDevPath);
    }

    paths.forEach((path) => {
      fs.writeFile(path, rootVars, (err) => {
        if (err) {
          console.log("err", err); // TODO: handle error
        }
      });
    });
  }
}
