import fs from "node:fs";
import * as NodePath from "node:path";
import { PathError, TListDirOptions, TPath } from "../lib/index.js";

/**
 * Checks if the given path is a directory.
 *
 * @param path - The file system path to check.
 * @returns `true` if the path is a directory, otherwise `false`.
 */
export const isDirectory = (path: TPath): boolean => {
  try {
    return fs.statSync(path).isDirectory();
  } catch {
    return false;
  }
};

/**
 * Checks if the given path is a file.
 *
 * @param path - The file system path to check.
 * @returns `true` if the path is a file, otherwise `false`.
 */
export const isFile = (path: string): boolean => {
  try {
    return fs.statSync(path).isFile();
  } catch {
    return false;
  }
};

/**
 * Checks if a `directory` exists at the given `file path`.
 *
 * @param fp - The file path to check.
 * @returns `true` if the directory exists, otherwise `false`.
 */
export const isValidPath = (fp: string) => {
  try {
    return fs.existsSync(fp);
  } catch {
    return false;
  }
};

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

/**
 * Creates directories if they do not already exist.
 *
 * @param {...string[]} dirs - A list of directory paths to create.
 *
 * @example
 * // Creates the directories 'logs', 'data', and 'temp/1' if they don't already exist.
 * createDirs('logs', 'data', 'temp/1');
 */
export const createDirs = (...dirs: string[]) => {
  dirs.forEach((dir) => {
    try {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    } catch (error) {
      console.error(`Failed to create directory: ${dir}`, error);
      throw new Error(`Failed to create dir.`);
    }
  });
};

/**
 * Deletes multiple directories.
 *
 * @param dirs - An array of directory paths to delete.
 * @param options - Optional fs.RmOptions to pass to rmSync.
 */
export const deleteDirs = (dirs: string[], options?: fs.RmOptions) => {
  dirs.forEach((dir) => {
    try {
      if (isValidPath(dir) && isDirectory(dir)) {
        fs.rmSync(dir, { recursive: true, force: true, ...options });
      }
    } catch (error) {
      console.error(`Failed to delete directory: ${dir}`, error);
      throw new Error(`Failed to delete dir.`);
    }
  });
};

/**
 * Lists the contents of a directory.
 *
 * @param path - The directory path to list.
 * @returns An array of file and directory names inside the given path.
 */
export const listDir = (
  path: string,
  options: TListDirOptions = { dirsOnly: false, filesOnly: false }
): string[] => {
  if (!path) {
    throw new Error("Path not provided.");
  }

  try {
    const content = fs.readdirSync(path);
    const result = content.filter((item) => {
      const itemPath = NodePath.join(path, item);
      const is_dir = isDirectory(itemPath);
      const is_file = isFile(itemPath);

      if (options.dirsOnly && options.filesOnly) return true;
      if (options.dirsOnly && !is_dir) return false;
      if (options.filesOnly && !is_file) return false;
      return true;
    });
    return result;
  } catch {
    return [];
  }
};
