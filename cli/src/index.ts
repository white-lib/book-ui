#!/usr/bin/env node

import { program } from "commander";

import { ScssRootCore } from "./scssRoot.core";
import { Config, ConfigCore } from "./config.core";

program
  .version("1.0.0")
  .description("Book UI CLI")
  .option("-p, --primary <type>", "Define primary color")
  .option("-s, --secondary <type>", "Define secondary color")
  .option("-b, --baseSize <type>", "Define base size")
  .action((options) => {
    const configCore = new ConfigCore();
    const configFromFile = configCore.getConfig();

    const config: Config = {
      primary: options.primary || configFromFile?.primary,
      secondary: options.secondary || configFromFile?.secondary,
      baseSize: options.baseSize || configFromFile?.baseSize || 40,
    };

    if (!config.primary) {
      throw new Error("Primary color is required");
    }

    if (!config.secondary) {
      config.secondary = config.primary;
    }

    const rootCore = new ScssRootCore(config);
    const rootVars = rootCore.generateScssRootColors();
    rootCore.save(rootVars);
  });

program.parse(process.argv);
