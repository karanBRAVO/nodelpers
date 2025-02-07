describe("isFile", () => {
  const testFile = path.join(__dirname, "test-file.txt");
  const testDir = path.join(__dirname, "test-directory");

  before(() => {
    if (!fs.existsSync(testFile)) {
      fs.writeFileSync(testFile, "test content");
    }
    if (!fs.existsSync(testDir)) {
      fs.mkdirSync(testDir);
    }
  });

  after(() => {
    if (fs.existsSync(testFile)) {
      fs.unlinkSync(testFile);
    }
    if (fs.existsSync(testDir)) {
      fs.rmdirSync(testDir);
    }
  });

  it("should return true for an existing file", () => {
    expect(isFile(testFile)).to.be.true;
  });

  it("should return false for a directory", () => {
    expect(isFile(testDir)).to.be.false;
  });

  it("should return false for a non-existent path", () => {
    expect(isFile("/path/to/non/existent/file")).to.be.false;
  });

  it("should handle null or undefined input", () => {
    expect(isFile(null)).to.be.false;
    expect(isFile(undefined)).to.be.false;
  });
});
