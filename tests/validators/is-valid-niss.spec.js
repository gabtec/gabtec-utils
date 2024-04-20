import { expect } from "chai";
import { isValidNISS } from "../../lib/validators/isValidNISS.js";
import { ValidationError } from "../../lib/index.js";

describe("VALIDATORS:: #isValidNISS Test Suite", () => {
  it("should pass -- Happy Path", () => {
    expect(isValidNISS("11115611236")).to.not.throw;
    expect(isValidNISS("23456789233")).to.not.throw;
    expect(isValidNISS("13456789232")).to.not.throw;
    expect(isValidNISS(11115611236)).to.not.throw;
    expect(isValidNISS(23456789233)).to.not.throw;
    expect(isValidNISS(13456789232)).to.not.throw;
  });

  it("should fail if not a String or a Number", () => {
    try {
      isValidNISS();
      isValidNISS(undefined);
      isValidNISS(null);
      isValidNISS(true);
      isValidNISS(false);
      isValidNISS([]);
      isValidNISS({});
      isValidNISS(NaN);
    } catch (err) {
      expect(err.name).to.be.eql("ValidationError");
      expect(err.message).to.be.eql("Invalid NISS Type");
      expect(err.details).to.be.eql("NISS must be a String or a Number.");
      expect(err).to.be.instanceof(ValidationError);
    }
  });

  it("should fail on Strings not only numerical", () => {
    try {
      isValidNISS("abcd");
      isValidNISS("ab3456kls");
      isValidNISS("987tre432");
      isValidNISS("");
      isValidNISS("    ");
    } catch (err) {
      expect(err.name).to.be.eql("ValidationError");
      expect(err.message).to.be.eql("Invalid NISS Syntax");
      expect(err.details).to.be.eql(
        "NISS must have 11 digits, and start with 1 or 2."
      );
      expect(err).to.be.instanceof(ValidationError);
    }
  });

  it("should fail on wrong size", () => {
    try {
      // #10 or less
      isValidNISS("1234567");
      isValidNISS(1234567);
      isValidNISS("12345678");
      isValidNISS(12345678);
      isValidNISS("123456789");
      isValidNISS(123456789);
      isValidNISS("1234567810");
      isValidNISS(1234567810);
      // #12 or more
      isValidNISS("123456789112");
      isValidNISS(123456789112);
      isValidNISS("1234567891213");
      isValidNISS(1234567891213);
      isValidNISS("12345678912314");
      isValidNISS(12345678912314);
    } catch (err) {
      expect(err.name).to.be.eql("ValidationError");
      expect(err.message).to.be.eql("Invalid NISS Syntax");
      expect(err.details).to.be.eql(
        "NISS must have 11 digits, and start with 1 or 2."
      );
      expect(err).to.be.instanceof(ValidationError);
    }
  });

  it("should fail if 1st digit not 1||2", () => {
    try {
      isValidNISS("03456789231");
      isValidNISS("33456789231");
      isValidNISS("43456789231");
      isValidNISS("53456789231");
      isValidNISS("63456789231");
      isValidNISS("73456789231");
      isValidNISS("83456789231");
      isValidNISS("93456789231");
    } catch (err) {
      expect(err.name).to.be.eql("ValidationError");
      expect(err.message).to.be.eql("Invalid NISS Syntax");
      expect(err.details).to.be.eql(
        "NISS must have 11 digits, and start with 1 or 2."
      );
      expect(err).to.be.instanceof(ValidationError);
    }
  });

  it("should fail if check digit mismatch", () => {
    try {
      isValidNISS("11115611235");
    } catch (err) {
      expect(err.name).to.be.eql("ValidationError");
      expect(err.message).to.be.eql("Invalid NISS CheckDigit");
      expect(err.details).to.be.eql("Check digits do not match.");
      expect(err).to.be.instanceof(ValidationError);
    }
  });
});
