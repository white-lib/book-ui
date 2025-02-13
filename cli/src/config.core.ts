import fs from "fs";

export type Config = {
  primary: string;
  secondary: string;
  baseSize: number;
  fixShade: boolean;
  method: "analogous" | "monochromatic";
};

export class ConfigCore {
  private readonly configFilename = "book-ui.config.json";

  public getConfig() {
    return this.getConfigFromFile();
  }

  private getPath() {
    const cwd = process.cwd();
    return `${cwd}/${this.configFilename}`;
  }

  private getConfigFromFile(): Config | null {
    if (!this.checkFile()) {
      return null;
    }

    try {
      return JSON.parse(fs.readFileSync(this.getPath()).toString());
    } catch (e) {
      console.error("getConfig", e);
      return null;
    }
  }

  private checkFile(): boolean {
    return fs.existsSync(this.getPath());
  }
}
