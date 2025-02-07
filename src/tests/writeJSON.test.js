describe("writeJSON function", () => {
  it("should throw a PathError if the path is empty", async () => {
    try {
      await writeJSON("", { key: "value" });
    } catch (err) {
      expect(err).to.be.instanceOf(PathError);
    }
  });

  it("should throw a PathError if the path is whitespace", async () => {
    try {
      await writeJSON("   ", { key: "value" });
    } catch (err) {
      expect(err).to.be.instanceOf(PathError);
    }
  });
});
