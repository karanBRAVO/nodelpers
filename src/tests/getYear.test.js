describe("getYear", () => {
  it("should return the current year when no argument is provided", () => {
    const result = getYear();
    expect(result).to.equal(new Date().getFullYear());
  });

  it("should return the correct year for a given date string", () => {
    expect(getYear("2025-03-11T12:00:00Z")).to.equal(2025);
  });

  it("should return the correct year for a given timestamp", () => {
    expect(getYear(1736554800000)).to.equal(
      new Date(1736554800000).getFullYear()
    );
  });

  it("should return the correct year for a given Date object", () => {
    expect(getYear(new Date("2025-03-11T12:00:00Z"))).to.equal(2025);
  });
});
