import { ArrangementCore } from "./arrangement.core";

require("dotenv").config();

import * as fs from "node:fs";

import * as prettier from "prettier";

import { ColorsWithShade, ColorsCore, Shade } from "./colors.core";
import { DimensionsCore } from "./dimensions.core";
import { Config } from "./config.core";

import { ColorType, ColorTheme, VarColor } from "../types/color.types";

import { CommonColors } from "../colors/common.colors";
import { ButtonColors } from "../colors/button.colors";
import { SkeletonColors } from "../colors/skeleton.colors";
import { PureComponentColor } from "../colors/pureComponentColors";
import { ContainerColors } from "../colors/container.colors";
import { TextColors } from "../colors/text.colors";
import { InputColors } from "../colors/input.colors";

const DEFAULT_THEME: ColorTheme = "light";

export class ScssRootCore {
  private readonly grayColors: ColorsWithShade;
  private readonly commonColors: CommonColors;
  private readonly skeletonColors: SkeletonColors;
  private readonly containerColors: ContainerColors;
  private readonly textColors: TextColors;
  private readonly inputColors: InputColors;

  private readonly colorTypes: Record<
    ColorType,
    {
      shade: Shade;
      colors: ColorsWithShade;
      buttons: ButtonColors;
    } | null
  > = {
    primary: null,
    secondary: null,
    gray: null,
    common: null,
  };

  private readonly colorsCore: ColorsCore;

  private readonly dimensionsCore: DimensionsCore;
  private readonly arrangementCore: ArrangementCore;

  constructor(config: Config) {
    this.colorsCore = new ColorsCore(config.method, config.fixShade);
    this.dimensionsCore = new DimensionsCore(config.baseSize);
    this.arrangementCore = new ArrangementCore();

    this.grayColors = this.colorsCore.generateGrayShades(config.primary);

    this.commonColors = new CommonColors();
    this.skeletonColors = new SkeletonColors();
    this.containerColors = new ContainerColors({ override: config.override });
    this.textColors = new TextColors();
    this.inputColors = new InputColors();

    const configShades: Record<string, Shade | undefined> = {
      primary: config.primaryShade,
      secondary: config.secondaryShade,
    };

    for (const colorType in this.colorTypes) {
      const color: string = String(config[colorType as keyof Config]);

      if (
        color === "undefined" ||
        colorType === "gray" ||
        colorType === "common"
      ) {
        continue;
      }

      const colorData = this.colorsCore.generateShades(
        color,
        configShades[colorType],
      );

      this.colorTypes[colorType as ColorType] = {
        shade: colorData.shade,
        colors: colorData.colors,
        buttons: new ButtonColors(colorData.shade),
      };
    }
  }

  private static capitalize(val: string | number): string {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
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

  private static getContainerVars() {
    return `
\t--bu-container-shadow: 0 10px 20px -12px rgba(16,24,40,.1);
\t--bu-container-border: 1px;
\t--bu-container-radius: 0.5rem;
\t--bu-container-space: 0.8rem;
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
\t--bu-disabled-filter: none;
\t--bu-disabled-opacity: 0.5;
`;
  }

  private static getFontSizes() {
    return `
\t--bu-font-size: 1rem;
\t--bu-font-size-hint: 0.75rem;
`;
  }

  private withColors(callback: (type: ColorType) => string) {
    let content = "";
    for (const colorType in this.colorTypes) {
      const type = colorType as ColorType;

      if (this.colorTypes[type] === null) {
        continue;
      }

      content += callback(type);
    }

    return content;
  }

  private injectVars<T extends Object>(colors: T): string {
    let content = "\n";

    for (const [name, value] of Object.entries(colors)) {
      if (typeof value === "string") {
        content += `\t--bu-${name}: ${value};\n`;
        continue;
      }

      if (value.type === "common") {
        content += `\t--bu-${name}: var(--bu-${value.type}${ScssRootCore.capitalize(value.shade)});\n`;
        continue;
      }

      content += `\t--bu-${name}: var(--bu-${value.type}-${value.shade});\n`;
    }

    return content;
  }

  private mergeVars<T extends string[]>(...strings: T): string {
    return strings.join("");
  }

  private getCommonColors(theme: ColorTheme = DEFAULT_THEME) {
    return this.injectVars<PureComponentColor>(
      this.commonColors.getColors(theme),
    );
  }

  private getSkeletonColors(theme: ColorTheme = DEFAULT_THEME) {
    return this.injectVars<PureComponentColor>(
      this.skeletonColors.getColors(theme),
    );
  }

  private getContainerColors(theme: ColorTheme = DEFAULT_THEME) {
    return this.injectVars<PureComponentColor>(
      this.containerColors.getColors(theme),
    );
  }

  private getTextColors(theme: ColorTheme = DEFAULT_THEME) {
    return this.injectVars<PureComponentColor>(
      this.textColors.getColors(theme),
    );
  }

  private getInputColors(theme: ColorTheme = DEFAULT_THEME) {
    const inputColors = this.inputColors.getColors(theme);

    return this.withColors((type: ColorType) => {
      let content = "";
      for (const [colorType, variants] of Object.entries(inputColors)) {
        for (const [variant, states] of Object.entries(variants)) {
          for (const [state, props] of Object.entries(states)) {
            for (const [prop, value] of Object.entries(props)) {
              if (value === null) {
                continue;
              }

              if (typeof value === "string") {
                continue;
              }

              const obj = value as VarColor;

              if (obj.type === "common" && obj.shade) {
                content += `\t--bu-input-${colorType}-${variant}-${prop}-${state}: var(--bu-${obj.type}${ScssRootCore.capitalize(obj.shade)});\n`;
                continue;
              }

              content += `\t--bu-input-${colorType}-${variant}-${prop}-${state}: var(--bu-${obj.type}-${obj.shade});\n`;
            }
            content += "\n";
          }
          content += "\n";
        }
        content += "\n";
      }

      return content;
    });
  }

  private getDarkModeColors() {
    const theme: ColorTheme = "dark";

    return this.mergeVars(
      `
\tcolor-scheme: dark;

\t--bu-input-bg: var(--bu-gray-800);
\t--bu-input-primary-filled-bg: var(--bu-gray-900);

\t--bu-container-shadow: 0 10px 20px -12px rgba(16,24,40,.1);
`,
      this.getButtonColors(theme),
      this.getSkeletonColors(theme),
      this.getContainerColors(theme),
      this.getTextColors(theme),
    );
  }

  private getButtonColors(theme: ColorTheme) {
    return this.withColors((type: ColorType) => {
      let content = "";

      const buttonColors = this.colorTypes[type]?.buttons?.getColors(theme);

      if (!buttonColors) {
        return content;
      }

      for (const [colorType, variants] of Object.entries(buttonColors)) {
        if (colorType !== type) {
          continue;
        }

        for (const [variant, states] of Object.entries(variants)) {
          for (const [state, props] of Object.entries(states)) {
            for (const [prop, shade] of Object.entries(props)) {
              if (shade === null) {
                continue;
              }

              let varName = `var(--bu-${type}-${shade})`;

              if (shade === 0) {
                varName = "transparent";
              }

              content += `\t--bu-btn-${colorType}-${variant}-${prop}-${state}: ${varName};\n`;
            }
          }
          content += "\n";
        }
        content += "\n";
      }

      return content;
    });
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
\t--bu-input-${type}-filled-bg: var(--bu-gray-50);
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
      const type = colorType as ColorType;
      if (this.colorTypes[type] === null) {
        continue;
      }

      for (const shade in this.colorTypes[type]?.colors) {
        content += `\t--bu-${colorType}-${shade}: ${this.colorTypes[type]?.colors[shade]};\n`;
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

  private getGaps() {
    const gaps = this.dimensionsCore.getGaps();
    let content = `\n`;

    for (const size in gaps) {
      content += `\t--bu-gap-${size}: ${gaps[size]};\n`;
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
\t--bu-space: calc(var(--bu-size-${size}) / 2.75);
\t--bu-radius: calc(var(--bu-size-${size}) / 5.5);
\t--bu-font-size: calc(var(--bu-size-${size}) / 3.1);
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

  generateScssRootColors(): Promise<string> {
    let content = ScssRootCore.getRootTag();

    content += this.getColorsByType();

    // colors
    content += this.getNeutralColors();

    content += this.getCommonColors();

    content += "\n";
    content += this.getButtonColors("light");

    content += this.getSkeletonColors();

    // inputs
    content += this.getInputVars();
    content += "\n";
    content += this.getInputColors();

    // controls
    content += this.getControlVars();

    // font
    content += ScssRootCore.getFontFamily();

    // sizes
    content += this.getSizes();

    // gaps
    content += this.getGaps();

    // Heading font sizes
    content += this.getHeadingSizes();

    // Text colors
    content += this.getTextColors();

    // Container vars
    content += ScssRootCore.getContainerVars();
    content += this.getContainerColors();

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

    content += "\n";
    content += ScssRootCore.getDarkModeMedia();
    content += this.getDarkModeColors();
    content += ScssRootCore.getCloseTag();
    content += ScssRootCore.getCloseTag();

    content += "\n";
    content += "\n";
    content += ScssRootCore.getDarkModeTag();
    content += this.getDarkModeColors();
    content += ScssRootCore.getCloseTag();

    return prettier.format(content, {
      semi: false,
      useTabs: true,
      tabWidth: 2,
      parser: "css",
    });
  }

  save(rootVars: string) {
    const outPath = `${__dirname}/../../../dist/assets/root.css`;
    const outDevPath = `${__dirname}/../../../lib/assets/styles/root.scss`;

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
