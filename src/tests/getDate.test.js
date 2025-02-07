describe("getDate", () => {
  let realDate;

  before(() => {
    realDate = global.Date;
  });

  after(() => {
    global.Date = realDate;
  });

  beforeEach(() => {
    global.Date = realDate;
  });

  it("should return a Date object", () => {
    const result = getDate();
    expect(result).to.be.instanceof(Date);
  });

  it("should return the current date and time", () => {
    const mockDate = new Date("2024-02-01T12:00:00Z");

    class MockDate extends Date {
      constructor() {
        super();
        return mockDate;
      }
    }

    global.Date = MockDate;

    const result = getDate();
    expect(result).to.deep.equal(mockDate);
  });

  it("should return a new Date instance each time", () => {
    const result1 = getDate();
    const result2 = getDate();

    expect(result1).to.not.equal(result2);
    expect(result1).to.be.instanceof(Date);
    expect(result2).to.be.instanceof(Date);
  });

  it("should return a valid date object with expected methods", () => {
    const result = getDate();

    expect(result.getTime).to.be.a("function");
    expect(result.toISOString).to.be.a("function");
    expect(result.toLocaleString).to.be.a("function");
    expect(Number.isFinite(result.getTime())).to.be.true;
  });
});
