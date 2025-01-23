/**
 * Wait for n milliseconds.
 * @param ms milliseconds
 */
export const wait = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
