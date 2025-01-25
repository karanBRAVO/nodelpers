/**
 * Checks if given string is empty or not.
 * @param str {String} string to check.
 * @returns {Boolean}
 */
export const isStringEmpty = (str: string): boolean => {
  return !str || str.trim().length === 0;
};

/**
 * Capitalizes the given string.
 * @param str {String} String to convert
 * @returns {String}
 */
export const capitalizeString = (str: string): string => {
  if (str === null || str === undefined) {
    throw new TypeError("Input must be a non-null, defined string");
  }
  if (!str) return "";
  const trimmedStr = str.trimStart();
  return (
    str.slice(0, str.length - trimmedStr.length) +
    trimmedStr.charAt(0).toUpperCase() +
    trimmedStr.slice(1)
  );
};
