import { isStringEmpty } from "../utils/string.utils";

describe("isStringEmpty", () => {
  test("returns true for an empty string", () => {
    expect(isStringEmpty("")).toBe(true);
  });

  test("returns true for a string with only spaces", () => {
    expect(isStringEmpty("   ")).toBe(true);
  });

  test("returns false for a non-empty string", () => {
    expect(isStringEmpty("hello")).toBe(false);
  });

  test("returns false for a string with spaces and text", () => {
    expect(isStringEmpty("  hello  ")).toBe(false);
  });

  test("returns false for a string with non-whitespace characters", () => {
    expect(isStringEmpty("\n\t")).toBe(true);
  });

  test("returns false for strings with special characters", () => {
    expect(isStringEmpty("!@#")).toBe(false);
  });

  test("returns false for strings with numeric characters", () => {
    expect(isStringEmpty("123")).toBe(false);
  });
});
