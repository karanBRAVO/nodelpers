import { TAllowedChar } from "../types/crypto.types.js";

export const HASH_ALGORITHMS = {
  SHA256: "sha256",
  SHA1: "sha1",
  MD5: "md5",
  SHA512: "sha512",
  SHA224: "sha224",
  SHA384: "sha384",
};

export const ENCRYPT_DECRYPT_ALGORITHM = "aes-256-cbc";

export const CHAR_GROUPS: Record<TAllowedChar, string> = {
  number: "0123456789",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  special: "!@#$%^&*()_-+=<>?/{}[]|",
};
