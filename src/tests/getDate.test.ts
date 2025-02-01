import { getDate } from "../utils/date.utils";

describe("getDate", () => {
  let realDate: DateConstructor;

  beforeAll(() => {
    realDate = global.Date;
  });

  afterAll(() => {
    global.Date = realDate;
  });

  beforeEach(() => {
    jest.resetModules();
    global.Date = realDate;
  });

  it("should return a Date object", () => {
    const result = getDate();
    expect(result).toBeInstanceOf(Date);
  });

  it("should return the current date and time", () => {
    const mockDate = new Date("2024-02-01T12:00:00Z");
    const MockDate = class extends Date {
      constructor() {
        super();
        return mockDate;
      }
    } as DateConstructor;

    global.Date = MockDate;

    const result = getDate();
    expect(result).toEqual(mockDate);
  });

  it("should return a new Date instance each time", () => {
    const result1 = getDate();
    const result2 = getDate();

    expect(result1).not.toBe(result2);
    expect(result1).toBeInstanceOf(Date);
    expect(result2).toBeInstanceOf(Date);
  });

  it("should return a valid date object with expected methods", () => {
    const result = getDate();

    expect(typeof result.getTime).toBe("function");
    expect(typeof result.toISOString).toBe("function");
    expect(typeof result.toLocaleString).toBe("function");
    expect(Number.isFinite(result.getTime())).toBe(true);
  });
});
