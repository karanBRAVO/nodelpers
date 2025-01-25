import { isValidEmail } from "../utils/validator.utils";

describe("isValidEmail", () => {
  it("should throw an error if email is empty", () => {
    expect(() => isValidEmail("")).toThrow("Please provide the email.");
  });

  it("should throw an error if email contains only whitespace", () => {
    expect(() => isValidEmail("   ")).toThrow("Please provide the email.");
  });

  it("should throw an error if email format is invalid (missing @)", () => {
    expect(() => isValidEmail("invalidemail.com")).toThrow(
      "Invalid email format."
    );
  });

  it("should throw an error if email format is invalid (missing domain)", () => {
    expect(() => isValidEmail("invalid@")).toThrow("Invalid email format.");
  });

  it("should return true for valid email addresses", () => {
    expect(isValidEmail("test@example.com")).toBe(true);
    expect(isValidEmail("user.name@domain.co")).toBe(true);
    expect(isValidEmail("hello.world@subdomain.domain.com")).toBe(true);
  });
});
