import { BaseError } from "./BaseError.js";

/**
 * Ensures given path string is in correct format.
 * @class PathError
 */
export class PathError extends BaseError {
  constructor(details?: Record<string, unknown>) {
    super("PathError", "Please provide a valid path.", details);
  }
}
