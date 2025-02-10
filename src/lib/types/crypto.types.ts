import { HASH_ALGORITHMS } from "../constants/index.js";
import { type BinaryToTextEncoding } from "crypto";

export type TEncoding = BinaryToTextEncoding;

export type TAlgorithmKey = keyof typeof HASH_ALGORITHMS;

export type TAllowedChar = "number" | "alphabet" | "special";

export type TRandomStringOptions = {
  length?: number;
  allowedChars?: Set<TAllowedChar>;
};
