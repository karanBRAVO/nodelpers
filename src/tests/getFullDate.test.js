describe("getFullDate", () => {
  let realDate;
  const mockDate = new Date("2024-02-01T12:00:00.000Z");

  before(() => {
    realDate = global.Date;
    class MockDate extends Date {
      constructor() {
        super();
        return mockDate;
      }
    }
    global.Date = MockDate;
  });

  after(() => {
    global.Date = realDate;
  });

  it('should return local format when format is "local"', () => {
    const result = getFullDate("local");
    expect(result).to.be.a("string");
    expect(result).to.match(/\d{1,2}\/\d{1,2}\/\d{4}/);
  });

  it('should return ISO date without time when format is "iso"', () => {
    const result = getFullDate("iso");
    expect(result).to.equal("2024-02-01");
    expect(result).to.not.include("T");
    expect(result).to.not.include("Z");
  });

  it('should return full ISO string when format is "utc"', () => {
    const result = getFullDate("utc");
    expect(result).to.equal("2024-02-01T12:00:00.000Z");
    expect(result).to.include("T");
    expect(result).to.include("Z");
  });

  it("should handle all valid format options", () => {
    const formats = ["local", "iso", "utc"];
    formats.forEach((format) => {
      const result = getFullDate(format);
      expect(result).to.be.a("string");
      expect(result.length).to.be.greaterThan(0);
    });
  });

  it("should return different results for different formats", () => {
    const localResult = getFullDate("local");
    const isoResult = getFullDate("iso");
    const utcResult = getFullDate("utc");

    expect(localResult).to.not.equal(isoResult);
    expect(isoResult).to.not.equal(utcResult);
    expect(localResult).to.not.equal(utcResult);
  });

  it("should handle invalid format parameter at runtime", () => {
    expect(() => getFullDate("invalid")).to.not.throw();
  });
});
