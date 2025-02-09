const KEY = generateRandomBytes(32); // 32-byte key for AES-256-CBC

describe("encryptString", () => {
  it("should encrypt and decrypt correctly", () => {
    const originalText = "Hello, World!";
    const encryptedText = encryptString(originalText, KEY);
    const decryptedText = decryptString(encryptedText, KEY);
    expect(decryptedText).to.equal(originalText);
  });

  it("should return a string in the correct format", () => {
    const originalText = "Test Encryption";
    const encryptedText = encryptString(originalText, KEY);

    // Ensure the format is: IV (base64) : encryptedData (base64)
    const [iv, encrypted] = encryptedText.split(":");
    expect(iv)
      .to.be.a("string")
      .and.match(/^[A-Za-z0-9+/=]+$/); // Base64 format check
    expect(encrypted)
      .to.be.a("string")
      .and.match(/^[A-Za-z0-9+/=]+$/); // Base64 format check
  });

  it("should produce different encrypted strings for the same input", () => {
    const originalText = "Hello, World!";
    const encryptedText1 = encryptString(originalText, KEY);
    const encryptedText2 = encryptString(originalText, KEY);

    // Encryption should be unique every time due to the IV
    expect(encryptedText1).to.not.equal(encryptedText2);
  });

  it("should throw an error if the key size is incorrect", () => {
    const invalidKey = randomBytes(16); // Incorrect size (should be 32 for AES-256)
    expect(() => encryptString("Some text", invalidKey)).to.throw();
  });

  it("should return a non-empty encrypted string", () => {
    const originalText = "Non-empty text";
    const encryptedText = encryptString(originalText, KEY);
    expect(encryptedText).to.not.be.empty;
  });
});
