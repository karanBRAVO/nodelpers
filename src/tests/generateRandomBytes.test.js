const ERROR = "Invalid size. Size must be a positive number.";

describe("generateRandomBytes", () => {
  it("should return a buffer of the correct size", () => {
    const size = 16;
    const randomData = generateRandomBytes(size);
    expect(randomData).to.be.instanceOf(Buffer);
    expect(randomData.length).to.equal(size);
  });

  it("should generate different values on multiple calls", () => {
    const randomData1 = generateRandomBytes(16);
    const randomData2 = generateRandomBytes(16);
    expect(randomData1.equals(randomData2)).to.be.false;
  });

  it("should throw an error for invalid sizes", () => {
    expect(() => generateRandomBytes(0)).to.throw(ERROR);
    expect(() => generateRandomBytes(-5)).to.throw(ERROR);
    expect(() => generateRandomBytes(NaN)).to.throw(ERROR);
  });
});
