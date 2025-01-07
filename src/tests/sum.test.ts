import { sum } from "../utils/number.utils";

describe("sum function", () => {
  it("should return 0 when no arguments are provided", () => {
    expect(sum()).toBe(0);
  });

  it("should return the number itself when one argument is provided", () => {
    expect(sum(5)).toBe(5);
  });

  it("should return the sum of multiple numbers", () => {
    expect(sum(1, 2, 3, 4)).toBe(10);
    expect(sum(10, 20, 30)).toBe(60);
  });

  it("should handle negative numbers", () => {
    expect(sum(-1, -2, -3)).toBe(-6);
    expect(sum(-1, 2, 3)).toBe(4);
  });

  it("should handle large numbers correctly", () => {
    expect(sum(1e9, 1e9)).toBe(2e9);
  });

  it("should handle an array spread as arguments", () => {
    const numbers = [1, 2, 3, 4];
    expect(sum(...numbers)).toBe(10);
  });
});
