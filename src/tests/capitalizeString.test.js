describe("capitalizeString", () => {
  it("capitalizes a single lowercase word", () => {
    expect(capitalizeString("hello")).to.equal("Hello");
  });

  it("returns the same string if the first letter is already capitalized", () => {
    expect(capitalizeString("Hello")).to.equal("Hello");
  });

  it("capitalizes a string with the first letter lowercase and the rest uppercase", () => {
    expect(capitalizeString("hELLO")).to.equal("HELLO");
  });

  it("handles a single character string", () => {
    expect(capitalizeString("a")).to.equal("A");
  });

  it("handles an empty string", () => {
    expect(capitalizeString("")).to.equal("");
  });

  it("handles strings with leading spaces", () => {
    expect(capitalizeString("  hello")).to.equal("  Hello");
  });

  it("handles strings with special characters as the first character", () => {
    expect(capitalizeString("!hello")).to.equal("!hello");
  });

  it("handles strings with numeric characters as the first character", () => {
    expect(capitalizeString("1hello")).to.equal("1hello");
  });

  it("handles null input gracefully", () => {
    expect(() => capitalizeString(null)).to.throw(TypeError);
  });

  it("handles undefined input gracefully", () => {
    expect(() => capitalizeString(undefined)).to.throw(TypeError);
  });
});
