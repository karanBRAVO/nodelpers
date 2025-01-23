import { PathError } from "../lib";
import { readJSON } from "../utils/fs.utils";

describe("readJSON function", () => {
  it("should throw a PathError if the path is empty", async () => {
    await expect(readJSON("")).rejects.toThrow(PathError);
  });

  it("should throw a PathError if the path is whitespace", async () => {
    await expect(readJSON("   ")).rejects.toThrow(PathError);
  });
});
