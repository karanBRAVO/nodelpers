/**
 * Validates if the provided email string is in a valid email format.
 * The email must not be empty, must contain the "@" symbol, and must contain a valid domain.
 *
 * @param {String} email - The email string to validate.
 * @throws `Error` Throws an error if the email is invalid or empty.
 * @returns {Boolean} Returns true if the email is valid.
 */
export const isValidEmail = (email: string): boolean => {
  if (!email || email.trim().length === 0) {
    throw new Error("Please provide the email.");
  }

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!emailRegex.test(email)) {
    throw new Error("Invalid email format.");
  }

  return true;
};
