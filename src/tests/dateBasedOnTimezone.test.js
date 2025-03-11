describe("dateBasedOnTimezone", () => {
  it("should return a Date object", () => {
    const result = dateBasedOnTimezone("Asia/Kolkata");
    expect(result).to.be.instanceOf(Date);
  });

  it("should correctly convert a UTC date-time to IST (Asia/Kolkata)", () => {
    const inputDate = new Date("2025-03-11T12:00:00Z");
    const result = dateBasedOnTimezone("Asia/Kolkata", inputDate);

    expect(result.getHours()).to.equal(17);
    expect(result.getMinutes()).to.equal(30);
  });

  it("should correctly convert a UTC date-time to EST (Asia/Jakarta)", () => {
    const inputDate = new Date("2012/04/20 10:10:30 +0000");
    const result = dateBasedOnTimezone("Asia/Jakarta", inputDate);

    expect(result.getHours()).to.equal(17);
  });

  it("should handle daylight saving time (DST) properly", () => {
    const inputDate = new Date("2025-06-11T12:00:00Z");
    const result = dateBasedOnTimezone("America/New_York", inputDate);

    expect(result.getHours()).to.equal(8);
  });
});
