import fs from "node:fs";
import { PathError } from "../lib";

/**
 * Reads and parses a JSON file.
 * @param path The file path.
 * @returns Parsed JSON object.
 * @throws PathError if the path is invalid.
 * @throws Error if file reading or parsing fails.
 */
export const readJSON = async (path: string) => {
  if (!path || path.trim().length === 0) {
    throw new PathError();
  }
  try {
    const data = await fs.promises.readFile(path, "utf8");
    return JSON.parse(data);
  } catch (error) {
    throw new Error(`${error}`);
  }
};

/**
 * Writes an object as JSON to a file.
 * @param path The file path.
 * @param data {Object|Array} The data to write.
 * @throws PathError if the path is invalid.
 * @throws Error if writing to the file fails.
 */
// eslint-disable-next-line
export const writeJSON = async (path: string, data: any): Promise<void> => {
  if (!path || path.trim().length === 0) {
    throw new PathError();
  }
  try {
    const jsonData = JSON.stringify(data, null, 2);
    await fs.promises.writeFile(path, jsonData, "utf8");
  } catch (error) {
    throw new Error(`${error}`);
  }
};
