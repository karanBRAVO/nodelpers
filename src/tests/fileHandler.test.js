import fs from "fs/promises";

const testFilePath = path.join(__dirname, "testfile.txt");

describe("FileHandler", () => {
  beforeEach(async () => {
    await fs.writeFile(testFilePath, "Hello, world!", { encoding: "utf-8" });
  });

  afterEach(async () => {
    try {
      await fs.unlink(testFilePath);
    } catch (error) {
      console.log("Error deleting file", error);
    }
  });

  it("should open and read the file", async () => {
    const file = openFile("r", testFilePath);
    const content = await file.read();
    expect(content).to.equal("Hello, world!");
    await file.close();
  });

  it("should throw an error when reading a non-existent file", async () => {
    const nonExistentFile = path.join(__dirname, "does_not_exist.txt");
    try {
      const file = openFile("r", nonExistentFile);
      await file.read();
    } catch (error) {
      expect(error).to.be.instanceOf(Error);
      expect(error.code).to.equal("ENOENT");
    }
  });

  it("should write to a file in write mode", async () => {
    const file = openFile("w", testFilePath);
    await file.write("New content");
    await file.close();

    const newContent = await fs.readFile(testFilePath, "utf-8");
    expect(newContent).to.equal("New content");
  });

  it("should append to a file in append mode", async () => {
    const file = openFile("a", testFilePath);
    await file.append(" Appended!");
    await file.close();

    const finalContent = await fs.readFile(testFilePath, "utf-8");
    expect(finalContent).to.equal("Hello, world! Appended!");
  });

  it("should handle simultaneous reads and writes", async () => {
    const reader = openFile("r", testFilePath);
    const writer = openFile("a", testFilePath);

    const initialContent = await reader.read();
    expect(initialContent).to.equal("Hello, world!");

    await writer.append(" More data");
    await writer.close();

    const finalContent = await fs.readFile(testFilePath, "utf-8");
    expect(finalContent).to.equal("Hello, world! More data");

    await reader.close();
  });

  it("should close the file properly", async () => {
    const file = openFile("r", testFilePath);
    await file.close();

    try {
      await file.read();
    } catch (error) {
      expect(error).to.be.instanceOf(Error);
    }
  });
});
