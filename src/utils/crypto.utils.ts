import { createHash } from "node:crypto";
import {
  ALGORITHMS,
  type TAlgorithmKey,
  type TEncoding,
} from "../lib/index.js";

/**
 * Generates a cryptographic hash of a given string using the specified algorithm and encoding.
 *
 * @param s The string to be hashed.
 * @param algo The algorithm to use for hashing. Defaults to "SHA256".
 *              Available options: "SHA256", "SHA1", "MD5", "SHA512", "SHA224", "SHA384".
 * @param encoding The encoding format for the hash output. Defaults to "hex".
 *                 Available options: "hex", "base64", "binary", "base64url".
 *
 * @returns The resulting hash in the specified encoding format.
 *
 * @example
 * const hash = generateStringHash("Hello, world!", "SHA256", "hex");
 * console.log(hash); // Prints the SHA256 hash of the string in hexadecimal format.
 */
export const generateStringHash = (
  s: string,
  algo: TAlgorithmKey = "SHA256",
  encoding: TEncoding = "hex"
) => {
  const validAlgorithms: TAlgorithmKey[] = Object.keys(
    ALGORITHMS
  ) as TAlgorithmKey[];
  if (!validAlgorithms.includes(algo)) {
    throw new Error("Unsupported Algorithm.");
  }

  const validEncodings: TEncoding[] = ["hex", "base64", "binary", "base64url"];
  if (!validEncodings.includes(encoding)) {
    throw new Error("Unsupported Encoding.");
  }

  return createHash(algo).update(s).digest(encoding);
};

/**
 * Verifies if the provided string, when hashed using the given algorithm and encoding,
 * matches the provided hash.
 *
 * @param {string} s - The input string to be hashed.
 * @param {string} hash - The expected hash to compare against.
 * @param {TAlgorithmKey} [algo="SHA256"] - The hashing algorithm to use (default: "SHA256").
 * @param {TEncoding} [encoding="hex"] - The encoding format of the hash (default: "hex").
 * @returns {boolean} Returns `true` if the generated hash matches the provided hash, otherwise `false`.
 */
export const verifyStringHash = (
  s: string,
  hash: string,
  algo: TAlgorithmKey = "SHA256",
  encoding: TEncoding = "hex"
): boolean => {
  const generatedHash = generateStringHash(s, algo, encoding);
  return generatedHash === hash;
};
