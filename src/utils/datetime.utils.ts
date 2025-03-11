import { MONTH_NAMES } from "../lib/constants/datetime.constants.js";
import { TDateFormat, TDate, TDateUnits } from "../lib/index.js";
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

/**
 * Returns the absolute difference between two dates in the specified unit.
 *
 * @param d1 {TDate} - The first date.
 * @param d2 {TDate} - The second date.
 * @param unit {TDateUnits} - The unit of difference (default: "milliseconds").
 * @param absolute {boolean} - Whether to return an absolute difference (default: true).
 * @returns {number} The difference between d1 and d2 in the specified unit (i.e. d1 - d2).
 */
export const dateDiff = (
  d1: TDate,
  d2: TDate,
  unit: TDateUnits = "milliseconds",
  absolute: boolean = true
): number => {
  const date1 = getDate(d1);
  const date2 = getDate(d2);
  const diffInMs = date1.getTime() - date2.getTime();

  const conversions = {
    milliseconds: 1,
    second: 1000,
    minute: 1000 * 60,
    hour: 1000 * 60 * 60,
    day: 1000 * 60 * 60 * 24,
    month: 1000 * 60 * 60 * 24 * 30.44,
    year: 1000 * 60 * 60 * 24 * 365.25,
  };

  let result = diffInMs / conversions[unit];

  return absolute ? Math.abs(result) : result;
};

/**
 * Adds or subtracts the specified amount of time to/from a date.
 *
 * @param date {TDate} - The base date.
 * @param value {number} - The amount of time to add (positive) or subtract (negative).
 * @param unit {TDateUnits} - The unit of time to modify.
 * @returns {Date} The new modified date.
 */
export const addTime = (date: TDate, value: number, unit: TDateUnits): Date => {
  const parsedDate = getDate(date);

  switch (unit) {
    case "year":
      parsedDate.setFullYear(parsedDate.getFullYear() + value);
      break;
    case "month":
      parsedDate.setMonth(parsedDate.getMonth() + value);
      break;
    case "day":
      parsedDate.setDate(parsedDate.getDate() + value);
      break;
    case "hour":
      parsedDate.setHours(parsedDate.getHours() + value);
      break;
    case "minute":
      parsedDate.setMinutes(parsedDate.getMinutes() + value);
      break;
    case "second":
      parsedDate.setSeconds(parsedDate.getSeconds() + value);
      break;
    case "milliseconds":
      parsedDate.setMilliseconds(parsedDate.getMilliseconds() + value);
      break;
    default:
      throw new Error(`Invalid unit: ${unit}`);
  }

  return parsedDate;
};

/**
 * Converts a given date (or current date) to a specific time zone.
 *
 * @param {string} timeZone - The IANA time zone name (e.g., "America/New_York", "Asia/Kolkata").
 * @param {TDate} [date] - The optional date to convert. If not provided, the current date is used.
 * @returns {Date} A new Date object representing the time in the specified time zone.
 *
 * @example
 * // Convert the current date-time to India Standard Time (IST)
 * const istDate = dateBasedOnTimezone("Asia/Kolkata");
 * console.log(istDate); // Date object with IST time
 *
 * @example
 * // Convert a given UTC date-time to Eastern Standard Time (EST)
 * const estDate = dateBasedOnTimezone("America/New_York", "2025-03-11T12:00:00Z");
 * console.log(estDate); // Date object with EST time
 */
export const dateBasedOnTimezone = (timeZone: string, date?: TDate): Date => {
  const parsedDate = getDate(date);
  const localeString = parsedDate.toLocaleString("en-US", { timeZone });
  return new Date(localeString);
};

/**
 * Returns the day of the week for the given date.
 *
 * @param date {TDate} - The date to parse.
 * @param fullName {boolean} - Whether to return the full day name (e.g., "Monday") or short (e.g., "Mon").
 * @returns {string} The day of the week.
 */
export const getDay = (date?: TDate, fullName: boolean = true): string => {
  const parsedDate = getDate(date);
  const options: Intl.DateTimeFormatOptions = {
    weekday: fullName ? "long" : "short",
  };
  return new Intl.DateTimeFormat("en-US", options).format(parsedDate);
};
