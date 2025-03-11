describe("dateDiff", () => {
  it("should return the absolute difference in milliseconds by default", () => {
    const d1 = "2025-03-11T12:00:00Z";
    const d2 = "2025-03-11T11:59:59Z";
    expect(dateDiff(d1, d2)).to.equal(1000); // 1 second = 1000ms
  });

  it("should return the difference in seconds", () => {
    expect(
      dateDiff("2025-03-11T12:00:00Z", "2025-03-11T11:59:00Z", "second")
    ).to.equal(60);
  });

  it("should return the difference in minutes", () => {
    expect(
      dateDiff("2025-03-11T12:00:00Z", "2025-03-11T11:00:00Z", "minute")
    ).to.equal(60);
  });

  it("should return the difference in hours", () => {
    expect(
      dateDiff("2025-03-11T12:00:00Z", "2025-03-10T12:00:00Z", "hour")
    ).to.equal(24);
  });

  it("should return the difference in days", () => {
    expect(
      dateDiff("2025-03-15T00:00:00Z", "2025-03-10T00:00:00Z", "day")
    ).to.equal(5);
  });

  it("should return the difference in months (approximate)", () => {
    expect(
      dateDiff("2025-06-01T00:00:00Z", "2025-03-01T00:00:00Z", "month")
    ).to.be.closeTo(3, 0.1);
  });

  it("should return the difference in years (approximate)", () => {
    expect(
      dateDiff("2030-01-01T00:00:00Z", "2025-01-01T00:00:00Z", "year")
    ).to.be.closeTo(5, 0.1);
  });

  it("should return a negative value if absolute is false", () => {
    expect(
      dateDiff("2025-03-10T00:00:00Z", "2025-03-15T00:00:00Z", "day", false)
    ).to.equal(-5);
  });
});
