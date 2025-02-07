describe("readJSON function", () => {
  it("should throw a PathError if the path is empty", async () => {
    try {
      await readJSON("");
    } catch (err) {
      expect(err).to.be.instanceOf(PathError);
    }
  });

  it("should throw a PathError if the path is whitespace", async () => {
    try {
      await readJSON("   ");
    } catch (err) {
      expect(err).to.be.instanceOf(PathError);
    }
  });
});
