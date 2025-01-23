import { BaseError } from "./BaseError";

/**
 * Ensures given string is in correct format.
 * @class InvalidFormatError
 */
export class InvalidFormatError extends BaseError {
  constructor(details?: Record<string, unknown>) {
    super(
      "InvalidFormatError",
      "Invalid time format. Expected HH:MM:SS.",
      details
    );
  }
}
