describe("wait function", () => {
  let clock;

  beforeEach(() => {
    clock = sinon.useFakeTimers();
  });

  afterEach(() => {
    clock.restore();
  });

  it("should resolve after the specified time", async () => {
    const ms = 1000;

    const promise = wait(ms);

    clock.tick(ms); // Advance the fake timer by ms

    await expect(promise).to.eventually.be.undefined;
  });

  it("should not resolve before the specified time", (done) => {
    const ms = 1000;
    const promise = wait(ms);

    clock.tick(ms - 1); // Advance by less than the specified time

    let isResolved = false;
    promise.then(() => {
      isResolved = true;
    });

    expect(isResolved).to.be.false;

    clock.tick(1); // Advance by 1 more to resolve

    promise.then(() => {
      expect(isResolved).to.be.true;
      done();
    });
  });
});
