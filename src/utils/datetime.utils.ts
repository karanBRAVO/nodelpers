import { MONTH_NAMES } from "../lib/constants/datetime.constants.js";
import { TDateFormat, TDate } from "../lib/index.js";
import { InvalidFormatError, InvalidTimeValuesError } from "../lib/index.js";

/**
 * Wait for n milliseconds.
 * @param ms milliseconds
 */
export const wait = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

/**
 * Convert given seconds to Hours:Minutes:Seconds format.
 * @param totalSeconds {Number} seconds
 * @returns HH:MM:SS format
 */
export function secondsToHHMMSS(totalSeconds: number): string {
  totalSeconds = Math.max(0, Math.floor(totalSeconds));

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const paddedHours = hours.toString().padStart(2, "0");
  const paddedMinutes = minutes.toString().padStart(2, "0");
  const paddedSeconds = seconds.toString().padStart(2, "0");

  return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
}

/**
 * Convert given HH:MM:SS format to total seconds.
 * @param timeString {String} Time in HH:MM:SS format
 * @returns Total seconds as a number
 * @throws Invalid Format Error
 */
export function HHMMSSToSeconds(timeString: string): number {
  if (!/^\d{2}:\d{2}:\d{2}$/.test(timeString)) {
    throw new InvalidFormatError();
  }

  const parts = timeString.split(":").map(Number);

  if (parts.some(isNaN)) {
    throw new InvalidFormatError();
  }

  const [hours, minutes, seconds] = parts;

  if (
    hours < 0 ||
    minutes < 0 ||
    minutes >= 60 ||
    seconds < 0 ||
    seconds >= 60
  ) {
    throw new InvalidTimeValuesError();
  }

  return hours * 3600 + minutes * 60 + seconds;
}

/**
 * Returns the current date and time as a Date object.
 *
 * @returns {Date} The current date and time.
 */
export const getDate = (date?: TDate): Date => {
  return date ? new Date(date) : new Date();
};

/**
 * Formats the current date according to the specified format.
 *
 * @param {TDateFormat} format - The desired date format
 *   - 'local': Returns date in local format (e.g., "2/1/2024, 12:00:00 PM")
 *   - 'iso': Returns date in ISO format without time (e.g., "2024-02-01")
 *   - 'utc': Returns full ISO string (e.g., "2024-02-01T12:00:00.000Z")
 * @param {TDate} date - The date to parse.
 * @returns {string} The formatted date string
 */
export const getFullDate = (format: TDateFormat, date?: TDate): string => {
  const parsedDate = getDate(date);

  let dateString: string = "";

  if (format === "local") {
    dateString = parsedDate.toLocaleString();
  } else if (format === "iso") {
    dateString = parsedDate.toISOString().split("T")[0];
  } else {
    dateString = parsedDate.toISOString();
  }

  return dateString;
};

/**
 * Returns the full year of the current date.
 *
 * @returns {number} The four-digit full year (e.g., 2025).
 */
export const getYear = (date?: TDate): number => {
  const parsedDate = getDate(date);
  return parsedDate.getFullYear();
};

/**
 * Returns the month of the current date.
 *
 * @param date {TDate} - The date to parse.
 * @param asString {boolean} - Whether to return the month as a name instead of index.
 * @returns {number} The month of the current date (0-11).
 */
export const getMonth = (
  date?: TDate,
  asString: boolean = false
): number | string => {
  const parsedDate = getDate(date);
  const monthIndex = parsedDate.getMonth();
  if (asString) {
    return MONTH_NAMES[monthIndex];
  }
  return monthIndex;
};
