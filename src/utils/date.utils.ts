import { TDateFormat } from "../lib/index.js";

/**
 * Returns the current date and time as a Date object.
 *
 * @returns {Date} The current date and time.
 */
export const getDate = (): Date => {
  return new Date();
};

/**
 * Formats the current date according to the specified format.
 *
 * @param {TDateFormat} format - The desired date format
 *   - 'local': Returns date in local format (e.g., "2/1/2024, 12:00:00 PM")
 *   - 'iso': Returns date in ISO format without time (e.g., "2024-02-01")
 *   - 'utc': Returns full ISO string (e.g., "2024-02-01T12:00:00.000Z")
 * @returns {string} The formatted date string
 */
export const getFullDate = (format: TDateFormat): string => {
  const date = getDate();

  let dateString: string = "";

  if (format === "local") {
    dateString = date.toLocaleString();
  } else if (format === "iso") {
    dateString = date.toISOString().split("T")[0];
  } else {
    dateString = date.toISOString();
  }

  return dateString;
};
