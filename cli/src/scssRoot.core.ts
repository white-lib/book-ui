import { Colors, ColorsCore } from "./colors.core";
import * as fs from "node:fs";
import { DimensionsCore } from "./dimensions.core";
import { Config } from "./config.core";

export class ScssRootCore {
  private readonly primaryColors: Colors;

  private readonly colorsCore: ColorsCore;
  private readonly dimensionsCore: DimensionsCore;

  constructor(config: Config) {
    this.colorsCore = new ColorsCore();
    this.dimensionsCore = new DimensionsCore(config.baseSize);

    this.primaryColors = this.colorsCore.generateShades(config.primary);
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
  private static getNeutralColors() {
    return `
\t--bu-gray-50: #f9fafb;
\t--bu-gray-100: #f3f4f6;
\t--bu-gray-200: #e5e7eb;
\t--bu-gray-300: #d1d5db;
\t--bu-gray-400: #9ca3af;
\t--bu-gray-500: #6b7280;
\t--bu-gray-600: #4b5563;
\t--bu-gray-700: #374151;
\t--bu-gray-800: #1f2937;
\t--bu-gray-900: #111827;
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

  private static getButtonColors() {
    return `
\t--bu-btn-primary-bg: var(--bu-primary-600);
\t--bu-btn-text-color: var(--bu-white);
\t--bu-btn-text-bg-hover: var(--bu-gray-200);
\t--bu-btn-primary-hover: var(--bu-primary-500);
\t--bu-btn-primary-active: var(--bu-primary-700);
\t--bu-btn-text-color-active: var(--bu-primary-500);

`;
  }

  private static getControlVars() {
    return `
\t--bu-control-color: var(--bu-gray-300);
\t--bu-control-hover: var(--bu-primary-600);
\t--bu-control-checked-bg: var(--bu-primary-500);
\t--bu-control-mark-color: var(--bu-white);
\t--bu-control-border-width: 1px;
`;
  }

  private static getInputVars() {
    return `
\t--bu-input-bg: var(--bu-gray-100);
\t--bu-input-border: var(--bu-gray-400);
\t--bu-input-border-focus: var(--bu-primary-500);
\t--bu-input-border-style: solid;
\t--bu-input-border-width: 1px;
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
    color-scheme: dark;
    
\t--bu-text-color: var(--bu-text-gray-50); 
\t--bu-text-invert-color: #000000; 
\t--bu-text-heading-color: var(--bu-primary-50); 
\t--bu-text-hint-color: var(--bu-gray-300); 
\t--bu-skeleton-color-1: var(--bu-gray-800);
\t--bu-skeleton-color-2: var(--bu-gray-900);
\t--bu-input-bg: var(--bu-gray-800);

\t--bu-btn-text-bg-hover: var(--bu-gray-800);
\t--bu-btn-text-color-active: var(--bu-gray-400);

\t--bu-container-bg: var(--bu-gray-900);
\t--bu-container-shadow: 0 10px 20px -12px rgba(16,24,40,.1);
\t--bu-container-border-color: var(--bu-gray-800);
`;
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
`;
  }

  generateScssRootColors(): string {
    let content = ScssRootCore.getRootTag();

    for (const shade in this.primaryColors) {
      content += `\t--bu-primary-${shade}: ${this.primaryColors[shade]};\n`;
    }

    // colors
    content += ScssRootCore.getNeutralColors();
    content += ScssRootCore.getCommonColors();
    content += ScssRootCore.getButtonColors();
    content += ScssRootCore.getSkeletonColors();

    // inputs
    content += ScssRootCore.getInputVars();

    // controls
    content += ScssRootCore.getControlVars();

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
    content += ScssRootCore.getDarkModeTag();
    content += ScssRootCore.getDarkModeColors();
    content += ScssRootCore.getCloseTag();

    return content;
  }

  save(rootVars: string) {
    const outPath = `${__dirname}/../../dist/assets/root.css`;
    const outDevPath = `${__dirname}/../../lib/assets/styles/root.scss`;

    [outPath, outDevPath].forEach((path) => {
      fs.writeFile(path, rootVars, (err) => {
        if (err) {
          console.log("err", err); // TODO: handle error
        }
      });
    });
  }
}
