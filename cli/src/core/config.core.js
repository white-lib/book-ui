import fs from "fs";
export class ConfigCore {
    constructor() {
        this.configFilename = "book-ui.config.json";
    }
    getConfig(customPath) {
        return this.getConfigFromFile(customPath);
    }
    getPath() {
        const cwd = process.cwd();
        return `${cwd}/${this.configFilename}`;
    }
    getConfigFromFile(customPath) {
        if (!this.checkFile(customPath)) {
            return null;
        }
        try {
            return JSON.parse(fs.readFileSync(customPath || this.getPath()).toString());
        }
        catch (e) {
            console.error("getConfig", e);
            return null;
        }
    }
    checkFile(customPath) {
        return fs.existsSync(customPath || this.getPath());
    }
}
//# sourceMappingURL=config.core.js.map