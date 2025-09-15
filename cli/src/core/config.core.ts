import fs from "fs";

import { ColorOverride } from "../types/color.types";
import { Shade } from "./colors.core";

export type Config = {
  primary: string;
  secondary: string;
  baseSize: number;
  primaryShade?: Shade;
  secondaryShade?: Shade;
  fixShade: boolean;
  method: "analogous" | "monochromatic";
  override?: ColorOverride;
};

export class ConfigCore {
  private readonly configFilename = "book-ui.config.json";

  public getConfig(customPath?: string) {
    return this.getConfigFromFile(customPath);
  }

  private getPath() {
    const cwd = process.cwd();
    return `${cwd}/${this.configFilename}`;
  }

  private getConfigFromFile(customPath?: string): Config | null {
    if (!this.checkFile(customPath)) {
      return null;
    }

    try {
      return JSON.parse(
        fs.readFileSync(customPath || this.getPath()).toString(),
      );
    } catch (e) {
      console.error("getConfig", e);
      return null;
    }
  }

  private checkFile(customPath?: string): boolean {
    return fs.existsSync(customPath || this.getPath());
  }
}
