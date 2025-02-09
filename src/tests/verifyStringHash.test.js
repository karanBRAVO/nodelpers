describe("verifyStringHash", () => {
  const testString = "hello";
  const algo = "SHA256";
  const encoding = "hex";

  it("should return true for a correct hash match", () => {
    const hash = generateStringHash(testString, algo, encoding);
    expect(verifyStringHash(testString, hash, algo, encoding)).to.be.true;
  });

  it("should return false for an incorrect hash match", () => {
    const hash = generateStringHash(testString, algo, encoding);
    expect(verifyStringHash("world", hash, algo, encoding)).to.be.false;
  });

  it("should return false for an incorrect encoding", () => {
    const hash = generateStringHash(testString, algo, "base64");
    expect(verifyStringHash(testString, hash, algo, "hex")).to.be.false;
  });

  it("should throw an error for unsupported algorithms", () => {
    expect(() =>
      verifyStringHash(testString, "invalidHash", "INVALID_ALGO", encoding)
    ).to.throw("Unsupported Algorithm.");
  });

  it("should throw an error for unsupported encodings", () => {
    expect(() =>
      verifyStringHash(testString, "invalidHash", algo, "utf8")
    ).to.throw("Unsupported Encoding.");
  });
});
