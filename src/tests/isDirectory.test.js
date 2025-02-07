describe("isDirectory", () => {
  const testDir = path.join(__dirname, "test-directory");
  const testFile = path.join(__dirname, "test-file.txt");

  before(() => {
    if (!fs.existsSync(testDir)) {
      fs.mkdirSync(testDir);
    }
    if (!fs.existsSync(testFile)) {
      fs.writeFileSync(testFile, "test content");
    }
  });

  after(() => {
    if (fs.existsSync(testDir)) {
      fs.rmdirSync(testDir);
    }
    if (fs.existsSync(testFile)) {
      fs.unlinkSync(testFile);
    }
  });

  it("should return true for an existing directory", () => {
    expect(isDirectory(testDir)).to.be.true;
  });

  it("should return false for an existing file", () => {
    expect(isDirectory(testFile)).to.be.false;
  });

  it("should return false for a non-existent path", () => {
    expect(isDirectory("/path/to/non/existent/directory")).to.be.false;
  });

  it("should handle null or undefined input", () => {
    expect(isDirectory(null)).to.be.false;
    expect(isDirectory(undefined)).to.be.false;
  });
});
