#!/usr/bin/env node
import { program } from "commander";
import { ScssRootCore } from "./core/scssRoot.core";
import { ConfigCore } from "./core/config.core";
program
    .version("1.0.0")
    .description("Book UI CLI")
    .option("-c, --config <path>", "Path to config file")
    .option("-p, --primary <type>", "Define primary color")
    .option("-s, --secondary <type>", "Define secondary color")
    .option("-b, --baseSize <type>", "Define base size")
    .option("-m, --method <type>", "Define generate method")
    .action(async (options) => {
    const configCore = new ConfigCore();
    const configFromFile = configCore.getConfig(options.config);
    const config = {
        primary: options.primary || configFromFile?.primary,
        secondary: options.secondary || configFromFile?.secondary,
        baseSize: options.baseSize || configFromFile?.baseSize || 40,
        fixShade: options.fixShade || configFromFile?.fixShade || false,
        method: options.method || configFromFile?.method || "analogous",
        override: configFromFile?.override,
        primaryShade: configFromFile?.primaryShade,
        secondaryShade: configFromFile?.secondaryShade,
    };
    if (!config.primary) {
        throw new Error("Primary color is required");
    }
    if (!config.secondary) {
        config.secondary = config.primary;
    }
    const rootCore = new ScssRootCore(config);
    const rootVars = await rootCore.generateScssRootColors();
    rootCore.save(rootVars);
});
program.parse(process.argv);
//# sourceMappingURL=index.js.map