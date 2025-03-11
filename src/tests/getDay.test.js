describe("getDay", () => {
  it("should return the correct full day name for a given date string", () => {
    expect(getDay("2025-03-11")).to.equal("Tuesday");
    expect(getDay("2025-03-12")).to.equal("Wednesday");
  });

  it("should return the correct short day name when fullName is false", () => {
    expect(getDay("2025-03-11", false)).to.equal("Tue");
    expect(getDay("2025-03-12", false)).to.equal("Wed");
  });

  it("should return the correct day for a given Date object", () => {
    expect(getDay(new Date("2025-03-11"))).to.equal("Tuesday");
    expect(getDay(new Date("2025-03-12"))).to.equal("Wednesday");
  });

  it("should return the correct day for a timestamp", () => {
    expect(getDay(1736554800000)).to.equal(
      new Date(1736554800000).toLocaleDateString("en-US", { weekday: "long" })
    );
  });

  it("should return today's day name if no argument is provided", () => {
    expect(getDay()).to.equal(
      new Date().toLocaleDateString("en-US", { weekday: "long" })
    );
  });
});
