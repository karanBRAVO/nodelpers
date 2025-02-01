import { TDateFormat } from "../lib";
import { getFullDate } from "../utils/date.utils";

describe("getFullDate", () => {
  let realDate: DateConstructor;
  const mockDate = new Date("2024-02-01T12:00:00.000Z");

  beforeAll(() => {
    realDate = global.Date;
    const MockDate = class extends Date {
      constructor() {
        super();
        return mockDate;
      }
    } as DateConstructor;
    global.Date = MockDate;
  });

  afterAll(() => {
    global.Date = realDate;
  });

  it('should return local format when format is "local"', () => {
    const result = getFullDate("local");
    expect(typeof result).toBe("string");
    expect(result).toMatch(/\d{1,2}\/\d{1,2}\/\d{4}/);
  });

  it('should return ISO date without time when format is "iso"', () => {
    const result = getFullDate("iso");
    expect(result).toBe("2024-02-01");
    expect(result).not.toContain("T");
    expect(result).not.toContain("Z");
  });

  it('should return full ISO string when format is "utc"', () => {
    const result = getFullDate("utc");
    expect(result).toBe("2024-02-01T12:00:00.000Z");
    expect(result).toContain("T");
    expect(result).toContain("Z");
  });

  it("should handle all valid format options", () => {
    const formats: Array<"local" | "iso" | "utc"> = ["local", "iso", "utc"];
    formats.forEach((format) => {
      const result = getFullDate(format);
      expect(typeof result).toBe("string");
      expect(result.length).toBeGreaterThan(0);
    });
  });

  it("should return different results for different formats", () => {
    const localResult = getFullDate("local");
    const isoResult = getFullDate("iso");
    const utcResult = getFullDate("utc");

    expect(localResult).not.toBe(isoResult);
    expect(isoResult).not.toBe(utcResult);
    expect(localResult).not.toBe(utcResult);
  });

  it("should handle invalid format parameter at runtime", () => {
    expect(() => getFullDate("invalid" as TDateFormat)).not.toThrow();
  });
});
