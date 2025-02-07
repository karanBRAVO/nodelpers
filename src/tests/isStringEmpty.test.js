describe("isStringEmpty", () => {
  it("should return true for an empty string", () => {
    expect(isStringEmpty("")).to.be.true;
  });

  it("should return true for a string with only spaces", () => {
    expect(isStringEmpty("   ")).to.be.true;
  });

  it("should return false for a non-empty string", () => {
    expect(isStringEmpty("hello")).to.be.false;
  });

  it("should return false for a string with spaces and text", () => {
    expect(isStringEmpty("  hello  ")).to.be.false;
  });

  it("should return true for a string with non-whitespace characters", () => {
    expect(isStringEmpty("\n\t")).to.be.true;
  });

  it("should return false for strings with special characters", () => {
    expect(isStringEmpty("!@#")).to.be.false;
  });

  it("should return false for strings with numeric characters", () => {
    expect(isStringEmpty("123")).to.be.false;
  });
});
