describe("unixTimestampToDate", () => {
  it("should convert a Unix timestamp to the correct Date object", () => {
    const timestamp = 1686831045;
    const expectedMilliseconds = timestamp * 1000;
    const expectedDate = new Date(expectedMilliseconds);

    const result = unixTimestampToDate(timestamp);
    expect(result.getTime()).to.equal(expectedDate.getTime());
  });

  it("should handle the Unix epoch (timestamp 0)", () => {
    const timestamp = 0;
    const expectedDate = new Date("1970-01-01T00:00:00Z");

    const result = unixTimestampToDate(timestamp);

    expect(result.toISOString()).to.equal(expectedDate.toISOString());
  });

  it("should handle future timestamps", () => {
    const timestamp = 1893456000;
    const expectedDate = new Date("2030-01-01T00:00:00Z");

    const result = unixTimestampToDate(timestamp);

    expect(result.toISOString()).to.equal(expectedDate.toISOString());
  });

  it("should handle past timestamps", () => {
    const timestamp = 631152000;
    const expectedDate = new Date("1990-01-01T00:00:00Z");

    const result = unixTimestampToDate(timestamp);

    expect(result.toISOString()).to.equal(expectedDate.toISOString());
  });

  it("should correctly convert a timestamp with millisecond precision", () => {
    const timestamp = 1686831045.5;
    const result = unixTimestampToDate(timestamp);

    const milliseconds = result.getMilliseconds();

    expect(milliseconds).to.equal(500);
  });

  it("should handle current timestamp", () => {
    const now = new Date();
    const timestamp = Math.floor(now.getTime() / 1000);

    const result = unixTimestampToDate(timestamp);

    expect(Math.floor(result.getTime() / 1000)).to.equal(timestamp);
  });
});
