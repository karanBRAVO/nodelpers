describe("generateRandomString", () => {
  it("should generate a string of the specified length", () => {
    const length = 10;
    const result = generateRandomString({ length });
    expect(result).to.have.lengthOf(length);
  });

  it("should generate only numeric characters when allowedChars is set to 'number'", () => {
    const options = { length: 20, allowedChars: new Set(["number"]) };
    const result = generateRandomString(options);
    expect(result).to.match(/^[0-9]+$/); // Only numbers
  });

  it("should generate only alphabetic characters when allowedChars is set to 'alphabet'", () => {
    const options = { length: 15, allowedChars: new Set(["alphabet"]) };
    const result = generateRandomString(options);
    expect(result).to.match(/^[A-Za-z]+$/); // Only letters
  });

  it("should generate only special characters when allowedChars is set to 'special'", () => {
    const options = { length: 10, allowedChars: new Set(["special"]) };
    const result = generateRandomString(options);
    expect(result).to.match(/^[!@#$%^&*()_\-+=<>?/{}\[\]|]+$/); // Only special characters
  });

  it("should generate a mix of allowed character types", () => {
    const options = {
      length: 20,
      allowedChars: new Set(["alphabet", "number"]),
    };
    const result = generateRandomString(options);
    expect(result).to.match(/^[A-Za-z0-9]+$/); // Only numbers & alphabets
  });

  it("should throw an error if allowedChars set is empty", () => {
    const options = { length: 10, allowedChars: new Set() };
    expect(() => generateRandomString(options)).to.throw(
      "No characters available for selection"
    );
  });

  it("should use the default options if none are provided", () => {
    const result = generateRandomString();
    expect(result).to.have.lengthOf(16); // Default length
    expect(result).to.match(/^[A-Za-z0-9!@#$%^&*()_\-+=<>?/{}\[\]|]+$/); // Default includes all types
  });
});
