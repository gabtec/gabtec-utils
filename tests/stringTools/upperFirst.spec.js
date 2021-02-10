// require('../helpers');

const gtUpperFirst = require("../../lib/stringTools/upperFirst");

describe.only("String Tools:: #upperFirst Test Suite", () => {
  context("# Happy Path", () => {
    it("should return the srcString with 1st letter UpperCase", () => {
      const srcString = "someword";
      const outString = "Someword";
      const result = gtUpperFirst(srcString);

      expect(result).to.be.eql(outString);
    });

    it("should return the srcSetence with 1st letter UpperCase", () => {
      const srcString = "some word";
      const outString = "Some word";
      const result = gtUpperFirst(srcString);

      expect(result).to.be.eql(outString);
    });

    it("should return untouched, if string is number", () => {
      const srcString = "1234567890";
      const outString = "1234567890";
      const result = gtUpperFirst(srcString);

      expect(result).to.be.eql(outString);
    });

    it("should return the srcString untouched, if already upperFirst", () => {
      const srcString = "Smallwrd.";
      const outString = "Smallwrd.";
      const result = gtUpperFirst(srcString);

      expect(result).to.be.eql(outString);
    });
  });

  context("# Errors Path", () => {
    it("should throw error if arg[0] not a string", () => {
      const srcString = 12345;
      const outString = "Param must be a string.";

      expect(() => {
        gtUpperFirst(srcString);
      }).to.throw(outString);
    });
  });
});
