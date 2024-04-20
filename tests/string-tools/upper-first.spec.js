import { expect } from "chai";
import { upperFirst } from "../../lib/index.js";

describe("String Tools:: #upperFirst Test Suite", () => {
  context("# Happy Path", () => {
    it("should return the srcString with 1st letter UpperCase", () => {
      const srcString = "someword";
      const outString = "Someword";
      const result = upperFirst(srcString);

      expect(result).to.be.eql(outString);
    });

    it("should return the srcSetence with 1st letter UpperCase", () => {
      const srcString = "some word";
      const outString = "Some word";
      const result = upperFirst(srcString);

      expect(result).to.be.eql(outString);
    });

    it("should return untouched, if string is number", () => {
      const srcString = "1234567890";
      const outString = "1234567890";
      const result = upperFirst(srcString);

      expect(result).to.be.eql(outString);
    });

    it("should return the srcString untouched, if already upperFirst", () => {
      const srcString = "Smallwrd.";
      const outString = "Smallwrd.";
      const result = upperFirst(srcString);

      expect(result).to.be.eql(outString);
    });
  });

  context("# Errors Path", () => {
    it("should throw error if arg[0] not a string", () => {
      const srcString = 12345;
      const outString = "Param must be a string.";

      expect(() => {
        upperFirst(srcString);
      }).to.throw(outString);
    });
  });
});
