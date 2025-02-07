describe("HHMMSSToSeconds", () => {
  it("should convert HH:MM:SS to total seconds", () => {
    expect(HHMMSSToSeconds("02:15:30")).to.equal(8130);
    expect(HHMMSSToSeconds("00:00:00")).to.equal(0);
    expect(HHMMSSToSeconds("01:00:00")).to.equal(3600);
    expect(HHMMSSToSeconds("00:01:01")).to.equal(61);
    expect(HHMMSSToSeconds("23:59:59")).to.equal(86399);
  });

  it("should throw an error for invalid formats", () => {
    expect(() => HHMMSSToSeconds("")).to.throw(InvalidFormatError);
    expect(() => HHMMSSToSeconds("2:15:30")).to.throw(InvalidFormatError);
    expect(() => HHMMSSToSeconds("02:15")).to.throw(InvalidFormatError);
    expect(() => HHMMSSToSeconds("-02:15:30")).to.throw(InvalidFormatError);
    expect(() => HHMMSSToSeconds("02:15:60")).to.throw(InvalidTimeValuesError);
    expect(() => HHMMSSToSeconds("02:60:30")).to.throw(InvalidTimeValuesError);
  });

  it("should handle leading zeros correctly", () => {
    expect(HHMMSSToSeconds("00:01:01")).to.equal(61);
    expect(HHMMSSToSeconds("01:01:01")).to.equal(3661);
    expect(HHMMSSToSeconds("12:00:00")).to.equal(43200);
  });
});
