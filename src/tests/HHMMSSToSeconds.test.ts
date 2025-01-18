import { HHMMSSToSeconds } from "../utils/date.utils";
import { InvalidFormatError, InvalidTimeValuesError } from "../lib";

describe("HHMMSSToSeconds", () => {
  test("should convert HH:MM:SS to total seconds", () => {
    expect(HHMMSSToSeconds("02:15:30")).toBe(8130);
    expect(HHMMSSToSeconds("00:00:00")).toBe(0);
    expect(HHMMSSToSeconds("01:00:00")).toBe(3600);
    expect(HHMMSSToSeconds("00:01:01")).toBe(61);
    expect(HHMMSSToSeconds("23:59:59")).toBe(86399);
  });

  test("should throw an error for invalid formats", () => {
    expect(() => HHMMSSToSeconds("")).toThrow(InvalidFormatError);
    expect(() => HHMMSSToSeconds("2:15:30")).toThrow(InvalidFormatError);
    expect(() => HHMMSSToSeconds("02:15")).toThrow(InvalidFormatError);
    expect(() => HHMMSSToSeconds("-02:15:30")).toThrow(InvalidFormatError);
    expect(() => HHMMSSToSeconds("02:15:60")).toThrow(InvalidTimeValuesError);
    expect(() => HHMMSSToSeconds("02:60:30")).toThrow(InvalidTimeValuesError);
  });

  test("should handle leading zeros correctly", () => {
    expect(HHMMSSToSeconds("00:01:01")).toBe(61);
    expect(HHMMSSToSeconds("01:01:01")).toBe(3661);
    expect(HHMMSSToSeconds("12:00:00")).toBe(43200);
  });
});
