describe("addTime", () => {
  it("should add hours to a date", () => {
    const date = new Date("2025-03-11T12:00:00Z");
    const result = addTime(date, 5, "hour");

    expect(result.getHours()).to.equal(date.getHours() + 5);
  });

  it("should subtract hours from a date", () => {
    const date = new Date("2025-03-11T12:00:00Z");
    const result = addTime(date, -5, "hour");

    expect(result.getHours()).to.equal(date.getHours() - 5);
  });

  it("should add minutes to a date", () => {
    const date = new Date("2025-03-11T12:00:00Z");

    date.setMinutes(0);

    const result = addTime(date, 60, "minute");

    expect(result.getMinutes()).to.equal(0);

    expect(result.getHours()).to.equal(date.getHours() + 1);
  });

  it("should subtract minutes from a date", () => {
    const date = new Date("2025-03-11T12:00:00Z");
    const result = addTime(date, -30, "minute");

    expect(result.getMinutes()).to.equal(date.getMinutes() - 30);
  });
});
