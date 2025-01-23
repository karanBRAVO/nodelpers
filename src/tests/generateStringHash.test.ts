import { generateStringHash } from "../utils/crypto.utils";
import { TAlgorithmKey, TEncoding } from "../lib";

describe("generateStringHash function", () => {
  it("should generate a hash using the default algorithm (SHA256) and encoding (hex)", () => {
    const result = generateStringHash("Hello, world!");
    const expected =
      "315f5bdb76d078c43b8ac0064e4a0164612b1fce77c869345bfc94c75894edd3";
    expect(result).toBe(expected);
  });

  it("should generate a hash using the default algorithm (SHA256) and encoding (hex) when empty string is provided", () => {
    const result = generateStringHash("");
    const expected =
      "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
    expect(result).toBe(expected);
  });

  it("should generate a SHA1 hash when using the SHA1 algorithm", () => {
    const result = generateStringHash("Hello, world!", "SHA1");
    const expected = "943a702d06f34599aee1f8da8ef9f7296031d699";
    expect(result).toBe(expected);
  });

  it("should generate an MD5 hash when using the MD5 algorithm", () => {
    const result = generateStringHash("Hello, world!", "MD5");
    const expected = "6cd3556deb0da54bca060b4c39479839";
    expect(result).toBe(expected);
  });

  it("should generate a hash in base64 encoding when specified", () => {
    const result = generateStringHash("Hello, world!", "SHA256", "base64");
    const expected = "MV9b23bQeMQ7isAGTkoBZGErH853yGk0W/yUx1iU7dM=";
    expect(result).toBe(expected);
  });

  it("should throw an error if an unsupported algorithm is provided", () => {
    expect(() =>
      generateStringHash("Hello, world!", "unsupportedAlgo" as TAlgorithmKey)
    ).toThrow("Unsupported Algorithm.");
  });

  it("should throw an error if an unsupported encoding is provided", () => {
    expect(() =>
      generateStringHash(
        "Hello, world!",
        "SHA256",
        "unsupportedEncoding" as TEncoding
      )
    ).toThrow("Unsupported Encoding.");
  });
});
