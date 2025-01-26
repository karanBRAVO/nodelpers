import fs from "node:fs";
import chalk from "chalk";
import path from "node:path";
import { createDirs } from "./fs.utils.ts";
import type { ILogOptions } from "../lib/index.ts";

/**
 * Logs a message to the console with a specified log level and optionally saves it to a file.
 *
 * @param {any} message - The message to log.
 * @param {ILogOptions} options - Extra options for logging.
 * @param {TLogLevel} options.level - The log level (`info`, `warn`, `error`, or others).
 * @param {boolean} [options.devOnly=false] - If `true`, logs only in non-production environments.
 * @param {string} [options.logPath] - The path to a file where the log should be saved.
 *                                      If specified, the log will also be written to this file.
 *
 * @example
 * logToConsole("Server started", {
 *   level: "info",
 *   devOnly: false,
 *   logPath: "./logs/server.log",
 * });
 */
export const logToConsole = (
  // eslint-disable-next-line
  message: any,
  options: ILogOptions = { level: "default", devOnly: false }
) => {
  const { level, devOnly, logPath } = options;

  if (devOnly && process.env.NODE_ENV === "production") {
    return;
  }

  const timestamp = new Date().toISOString();
  const formattedMessage = `[${timestamp}] [${level.toUpperCase()}]: ${message}`;

  let coloredMessage;
  switch (level) {
    case "info":
      coloredMessage = chalk.blue(formattedMessage);
      break;
    case "warn":
      coloredMessage = chalk.yellow(formattedMessage);
      break;
    case "error":
      coloredMessage = chalk.red(formattedMessage);
      break;
    default:
      coloredMessage = formattedMessage;
  }

  console.log(coloredMessage);

  if (logPath && typeof logPath === "string" && logPath.length) {
    const dirPath = path.dirname(path.resolve(logPath));
    createDirs(dirPath);
    fs.appendFileSync(logPath, formattedMessage + "\n");
  }
};
