describe("secondsToHHMMSS", () => {
  it("should return a string in HH:MM:SS format", () => {
    const result = secondsToHHMMSS(12345);
    expect(result).to.be.a("string");
    expect(result).to.match(/^\d{2}:\d{2}:\d{2}$/);
  });

  it("should convert 0 seconds to 00:00:00", () => {
    expect(secondsToHHMMSS(0)).to.equal("00:00:00");
  });

  it("should convert 3600 seconds to 01:00:00", () => {
    expect(secondsToHHMMSS(3600)).to.equal("01:00:00");
  });

  it("should convert 3661 seconds to 01:01:01", () => {
    expect(secondsToHHMMSS(3661)).to.equal("01:01:01");
  });

  it("should convert 86399 seconds to 23:59:59", () => {
    expect(secondsToHHMMSS(86399)).to.equal("23:59:59");
  });

  it("should pad single-digit values correctly", () => {
    expect(secondsToHHMMSS(61)).to.equal("00:01:01");
    expect(secondsToHHMMSS(1)).to.equal("00:00:01");
  });

  it("should handle large input values correctly", () => {
    expect(secondsToHHMMSS(90000)).to.equal("25:00:00");
  });

  it("should handle negative input by returning 00:00:00", () => {
    expect(secondsToHHMMSS(-5)).to.equal("00:00:00");
  });

  it("should round down fractional seconds", () => {
    expect(secondsToHHMMSS(3661.9)).to.equal("01:01:01");
  });
});
