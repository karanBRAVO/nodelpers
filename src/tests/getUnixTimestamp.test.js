describe("getUnixTimestamp", () => {
  let clock;

  afterEach(() => {
    if (clock) {
      clock.restore();
      clock = null;
    }
  });

  it("should return the current unix timestamp when no parameter is provided", () => {
    const fixedDate = new Date("2023-01-01T00:00:00Z");
    clock = sinon.useFakeTimers(fixedDate.getTime());

    const expectedTimestamp = Math.floor(fixedDate.getTime() / 1000);
    const result = getUnixTimestamp();

    expect(result).to.equal(expectedTimestamp);
  });

  it("should convert a Date object to unix timestamp", () => {
    const testDate = new Date("2023-06-15T12:30:45Z");
    const expectedTimestamp = Math.floor(testDate.getTime() / 1000);

    const result = getUnixTimestamp(testDate);

    expect(result).to.equal(expectedTimestamp);
  });

  it("should convert an ISO date string to unix timestamp", () => {
    const isoDateString = "2023-06-15T12:30:45Z";
    const expectedTimestamp = Math.floor(
      new Date(isoDateString).getTime() / 1000
    );

    const result = getUnixTimestamp(isoDateString);

    expect(result).to.equal(expectedTimestamp);
  });

  it("should convert milliseconds since epoch to unix timestamp", () => {
    const milliseconds = 1686831045000;
    const expectedTimestamp = Math.floor(milliseconds / 1000);

    const result = getUnixTimestamp(milliseconds);

    expect(result).to.equal(expectedTimestamp);
  });

  it("should handle future dates", () => {
    const futureDate = new Date("2030-01-01T00:00:00Z");
    const expectedTimestamp = Math.floor(futureDate.getTime() / 1000);

    const result = getUnixTimestamp(futureDate);

    expect(result).to.equal(expectedTimestamp);
  });

  it("should handle dates in the past", () => {
    const pastDate = new Date("1990-01-01T00:00:00Z");
    const expectedTimestamp = Math.floor(pastDate.getTime() / 1000);

    const result = getUnixTimestamp(pastDate);

    expect(result).to.equal(expectedTimestamp);
  });
});
