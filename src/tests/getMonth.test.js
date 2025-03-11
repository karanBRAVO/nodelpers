describe("getMonth", () => {
  it("should return the current month index when no argument is provided", () => {
    const result = getMonth();
    expect(result).to.equal(new Date().getMonth());
  });

  it("should return the current month name when asString is true", () => {
    const result = getMonth(undefined, true);
    const expectedMonth = new Date().toLocaleString("default", {
      month: "long",
    });
    expect(result).to.equal(expectedMonth);
  });

  it("should return the correct month index for a given date string", () => {
    expect(getMonth("2025-03-11T12:00:00Z")).to.equal(2); // March
  });

  it("should return the correct month name for a given date string", () => {
    expect(getMonth("2025-03-11T12:00:00Z", true)).to.equal("March");
  });

  it("should return the correct month index for a given timestamp", () => {
    const timestamp = new Date("2024-12-25T00:00:00Z").getTime();
    expect(getMonth(timestamp)).to.equal(11); // December
  });

  it("should return the correct month name for a given timestamp", () => {
    const timestamp = new Date("2024-12-25T00:00:00Z").getTime();
    expect(getMonth(timestamp, true)).to.equal("December");
  });

  it("should return the correct month index for a given Date object", () => {
    const date = new Date("2024-07-15T08:30:00Z");
    expect(getMonth(date)).to.equal(6); // July
  });

  it("should return the correct month name for a given Date object", () => {
    const date = new Date("2024-07-15T08:30:00Z");
    expect(getMonth(date, true)).to.equal("July");
  });
});
