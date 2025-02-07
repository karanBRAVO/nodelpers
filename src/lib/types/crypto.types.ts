import { ALGORITHMS } from "../constants/index.js";
import { type BinaryToTextEncoding } from "crypto";

export type TEncoding = BinaryToTextEncoding;

export type TAlgorithmKey = keyof typeof ALGORITHMS;
