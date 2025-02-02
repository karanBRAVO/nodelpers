import { secondsToHHMMSS } from "../utils/time.utils";

describe("secondsToHHMMSS", () => {
  test("should return a string in HH:MM:SS format", () => {
    const result = secondsToHHMMSS(12345);
    expect(typeof result).toBe("string");
    expect(result).toMatch(/^\d{2}:\d{2}:\d{2}$/);
  });

  test("should convert 0 seconds to 00:00:00", () => {
    expect(secondsToHHMMSS(0)).toBe("00:00:00");
  });

  test("should convert 3600 seconds to 01:00:00", () => {
    expect(secondsToHHMMSS(3600)).toBe("01:00:00");
  });

  test("should convert 3661 seconds to 01:01:01", () => {
    expect(secondsToHHMMSS(3661)).toBe("01:01:01");
  });

  test("should convert 86399 seconds to 23:59:59", () => {
    expect(secondsToHHMMSS(86399)).toBe("23:59:59");
  });

  test("should pad single-digit values correctly", () => {
    expect(secondsToHHMMSS(61)).toBe("00:01:01");
    expect(secondsToHHMMSS(1)).toBe("00:00:01");
  });

  test("should handle large input values correctly", () => {
    expect(secondsToHHMMSS(90000)).toBe("25:00:00");
  });

  test("should handle negative input by returning 00:00:00", () => {
    expect(secondsToHHMMSS(-5)).toBe("00:00:00");
  });

  test("should round down fractional seconds", () => {
    expect(secondsToHHMMSS(3661.9)).toBe("01:01:01");
  });
});
