import { BaseError } from "./BaseError.ts";

/**
 * Ensures values are in the correct range
 * @class InvalidTimeValuesError
 */
export class InvalidTimeValuesError extends BaseError {
  constructor(details?: Record<string, unknown>) {
    super(
      "InvalidTimeValuesError",
      "Invalid time values. Ensure hours >= 0, 0 <= minutes < 60, and 0 <= seconds < 60.",
      details
    );
  }
}
