/**
 * Calculates the sum of numbers.
 * @param args numbers to sum
 * @returns sum, default 0 if not arguments are provided.
 * @example
 * let mysum = sum(1,2,3,4); // 10
 */
export const sum = (...args: number[]) => {
  let s = 0;
  args.forEach((arg) => {
    s += arg;
  });
  return s;
};
