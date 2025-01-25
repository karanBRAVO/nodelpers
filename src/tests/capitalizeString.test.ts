import { capitalizeString } from "../utils/string.utils";

describe("capitalizeString", () => {
  test("capitalizes a single lowercase word", () => {
    expect(capitalizeString("hello")).toBe("Hello");
  });

  test("returns the same string if the first letter is already capitalized", () => {
    expect(capitalizeString("Hello")).toBe("Hello");
  });

  test("capitalizes a string with the first letter lowercase and the rest uppercase", () => {
    expect(capitalizeString("hELLO")).toBe("HELLO");
  });

  test("handles a single character string", () => {
    expect(capitalizeString("a")).toBe("A");
  });

  test("handles an empty string", () => {
    expect(capitalizeString("")).toBe("");
  });

  test("handles strings with leading spaces", () => {
    expect(capitalizeString("  hello")).toBe("  Hello");
  });

  test("handles strings with special characters as the first character", () => {
    expect(capitalizeString("!hello")).toBe("!hello");
  });

  test("handles strings with numeric characters as the first character", () => {
    expect(capitalizeString("1hello")).toBe("1hello");
  });

  test("handles null input gracefully", () => {
    // eslint-disable-next-line
    expect(() => capitalizeString(null as any)).toThrow(TypeError);
  });

  test("handles undefined input gracefully", () => {
    // eslint-disable-next-line
    expect(() => capitalizeString(undefined as any)).toThrow(TypeError);
  });
});
