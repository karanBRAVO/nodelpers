import fs from "node:fs";

export type TListDirOptions = { dirsOnly?: boolean; filesOnly?: boolean };

export type TPath = fs.PathLike;

export type TFileMode = "r" | "w" | "a";
