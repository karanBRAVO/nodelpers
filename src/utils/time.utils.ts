import { InvalidFormatError, InvalidTimeValuesError } from "../lib/index.ts";

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
