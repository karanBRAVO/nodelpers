describe("isValidEmail", () => {
  it("should throw an error if email is empty", () => {
    expect(() => isValidEmail("")).to.throw("Please provide the email.");
  });

  it("should throw an error if email contains only whitespace", () => {
    expect(() => isValidEmail("   ")).to.throw("Please provide the email.");
  });

  it("should throw an error if email format is invalid (missing @)", () => {
    expect(() => isValidEmail("invalidemail.com")).to.throw(
      "Invalid email format."
    );
  });

  it("should throw an error if email format is invalid (missing domain)", () => {
    expect(() => isValidEmail("invalid@")).to.throw("Invalid email format.");
  });

  it("should return true for valid email addresses", () => {
    expect(isValidEmail("test@example.com")).to.be.true;
    expect(isValidEmail("user.name@domain.co")).to.be.true;
    expect(isValidEmail("hello.world@subdomain.domain.com")).to.be.true;
  });
});
