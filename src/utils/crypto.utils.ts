import {
  createHash,
  randomBytes,
  createCipheriv,
  createDecipheriv,
} from "node:crypto";
import {
  HASH_ALGORITHMS,
  ENCRYPT_DECRYPT_ALGORITHM,
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
    HASH_ALGORITHMS
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

/**
 * Generates a random byte buffer of the specified size.
 *
 * @param {number} size The number of random bytes to generate.
 * @returns {Buffer} A buffer containing the generated random bytes.
 */
export const generateRandomBytes = (size: number): Buffer => {
  if (size <= 0 || isNaN(size)) {
    throw new Error("Invalid size. Size must be a positive number.");
  }
  return randomBytes(size);
};

/**
 * Encrypts a string using AES-256-CBC.
 *
 * @param {string} text - The string to encrypt.
 * @param {Buffer<ArrayBufferLike>} key 32 bit key
 * @returns {string} The encrypted string in base64 format.
 *
 * @example
 * const encText = encryptString("Hello, World!", generateRandomBytes(32));
 */
export const encryptString = (
  text: string,
  key: Buffer<ArrayBufferLike>
): string => {
  const IV = generateRandomBytes(16); // Initialization Vector (IV)
  const cipher = createCipheriv(ENCRYPT_DECRYPT_ALGORITHM, key, IV);
  let encrypted = cipher.update(text, "utf8", "base64");
  encrypted += cipher.final("base64");
  return `${IV.toString("base64")}:${encrypted}`;
};

/**
 * Decrypts an encrypted string using AES-256-CBC.
 *
 * @param {string} encryptedText The encrypted string in base64 format (includes IV).
 * @param {Buffer<ArrayBufferLike>} key A 32-byte encryption key (must match the key used for encryption).
 * @returns {string} The decrypted original string.
 * @throws {Error} Throws an error if decryption fails.
 */
export const decryptString = (
  encryptedText: string,
  key: Buffer<ArrayBufferLike>
): string => {
  const [iv, encrypted] = encryptedText
    .split(":")
    .map((part) => Buffer.from(part, "base64"));

  if (key.length !== 32) {
    throw new Error("Invalid key size. Key must be 32 bytes for AES-256-CBC.");
  }

  const decipher = createDecipheriv(ENCRYPT_DECRYPT_ALGORITHM, key, iv);
  let decrypted = decipher.update(
    encrypted.toString("base64"),
    "base64",
    "utf8"
  );
  decrypted += decipher.final("utf8");
  return decrypted;
};
