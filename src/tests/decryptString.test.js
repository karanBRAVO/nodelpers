const KEY = generateRandomBytes(32); // 32-byte key for AES-256-CBC

describe("decryptString", () => {
  it("should correctly decrypt an encrypted string", () => {
    const originalText = "Hello, World!";
    const encryptedText = encryptString(originalText, KEY);
    const decryptedText = decryptString(encryptedText, KEY);
    expect(decryptedText).to.equal(originalText);
  });

  it("should throw an error if an incorrect key is used", () => {
    const originalText = "Hello, World!";
    const encryptedText = encryptString(originalText, KEY);
    const wrongKey = randomBytes(32);

    expect(() => decryptString(encryptedText, wrongKey)).to.throw();
  });

  it("should throw an error if the key size is incorrect", () => {
    const invalidKey = randomBytes(16);
    expect(() => decryptString("someEncryptedText", invalidKey)).to.throw(
      "Invalid key size. Key must be 32 bytes for AES-256-CBC."
    );
  });

  it("should return an empty string when an empty encrypted string is passed", () => {
    const encryptedText = encryptString("", KEY);
    const decryptedText = decryptString(encryptedText, KEY);
    expect(decryptedText).to.equal("");
  });

  it("should throw an error for invalid encrypted string format", () => {
    expect(() => decryptString("invalidEncryptedString", KEY)).to.throw();
  });
});
