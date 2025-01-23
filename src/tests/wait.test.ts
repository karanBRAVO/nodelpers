import { wait } from "../utils/time.utils";

describe("wait function", () => {
  jest.useFakeTimers();
  it("should resolve after the specified time", async () => {
    const ms = 1000;

    const promise = wait(ms);

    jest.advanceTimersByTime(ms);

    await expect(promise).resolves.toBeUndefined();
  });

  it("should not resolve before the specified time", () => {
    const ms = 1000;
    const promise = wait(ms);

    jest.advanceTimersByTime(ms - 1);

    let isResolved = false;
    promise.then(() => {
      isResolved = true;
    });

    expect(isResolved).toBe(false);

    jest.advanceTimersByTime(1);
    return expect(promise).resolves.toBeUndefined();
  });
});
