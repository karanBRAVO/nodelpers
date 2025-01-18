/**
 * BaseError serves as the foundation for all custom error classes.
 * It extends the built-in `Error` class to provide additional functionality
 * like capturing metadata (`details`) and ensuring the prototype chain is correctly restored.
 *
 * @class BaseError
 * @extends Error
 *
 * @param {string} name - The name of the error (e.g., "InvalidFormatError").
 * @param {string} message - A descriptive error message providing details about the error.
 * @param {Record<string, unknown>} [details] - Optional metadata providing additional context about the error.
 *
 * @example
 * throw new BaseError("CustomError", "An unexpected error occurred.", { input: "invalidValue" });
 */
export class BaseError extends Error {
  constructor(
    public name: string,
    public message: string,
    public details?: Record<string, unknown>
  ) {
    super(message);
    this.name = name;
    Object.setPrototypeOf(this, new.target.prototype);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
