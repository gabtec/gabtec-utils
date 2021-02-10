// require('../helpers');

const gtCrop = require("../../lib/stringTools/crop");

describe("String Tools:: #crop Test Suite", () => {
  context("# Happy Path", () => {
    it("should return the srcString cropped", () => {
      const srcString = "this is a very long sentence.";
      const outString = "this is a ve...";
      const result = gtCrop(srcString, 12);

      expect(result).to.be.eql(outString);
    });

    it("should not cast numbers, and crop ok", () => {
      const srcString = "1234567890";
      const outString = "12345...";
      const result = gtCrop(srcString, 5);

      expect(result).to.be.eql(outString);
    });

    it("should return the srcString untouched", () => {
      const srcString = "smallwrd.";
      const outString = "smallwrd.";
      const result = gtCrop(srcString, 10);

      expect(result).to.be.eql(outString);
    });
  });

  context("# Errors Path", () => {
    it("should throw error if arg[0] not a string", () => {
      const srcString = 12345;
      const outString = "First param must be a string.";

      expect(() => {
        gtCrop(srcString, 12);
      }).to.throw(outString);
    });

    it("should throw error if arg[1] not a number", () => {
      const srcString = "this is a very long sentence.";
      const outString = "Second param must be a number.";

      expect(() => {
        gtCrop(srcString, "not a number");
      }).to.throw(outString);
    });

    it("should not cast arg[1] to number", () => {
      const srcString = "this is a very long sentence.";
      const outString = "Second param must be a number.";

      expect(() => {
        gtCrop(srcString, "5");
      }).to.throw(outString);
    });
  });
});
