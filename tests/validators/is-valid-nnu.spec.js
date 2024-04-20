import { expect } from "chai";
import { isValidNNU } from "../../lib/validators/isValidNNU.js";
import { ValidationError } from "../../lib/index.js";

describe("VALIDATORS:: #isValidNNU Test Suite", () => {
  it("should pass -- Happy Path", () => {
    expect(isValidNNU("111156119")).to.not.throw;
    expect(isValidNNU("234567232")).to.not.throw;
    expect(isValidNNU("334589239")).to.not.throw;
    expect(isValidNNU("411589233")).to.not.throw;
    expect(isValidNNU("511589230")).to.not.throw;
    expect(isValidNNU("611589237")).to.not.throw;
    expect(isValidNNU("711589236")).to.not.throw;
    expect(isValidNNU("934567895")).to.not.throw;
    expect(isValidNNU(111156119)).to.not.throw;
    expect(isValidNNU(234567232)).to.not.throw;
    expect(isValidNNU(334589239)).to.not.throw;
    expect(isValidNNU(411589233)).to.not.throw;
    expect(isValidNNU(511589230)).to.not.throw;
    expect(isValidNNU(611589237)).to.not.throw;
    expect(isValidNNU(711589236)).to.not.throw;
    expect(isValidNNU(934567895)).to.not.throw;
  });

  it("should fail if not a String or a Number", () => {
    try {
      isValidNNU();
      isValidNNU(undefined);
      isValidNNU(null);
      isValidNNU(true);
      isValidNNU(false);
      isValidNNU([]);
      isValidNNU({});
      isValidNNU(NaN);
    } catch (err) {
      expect(err.name).to.be.eql("ValidationError");
      expect(err.message).to.be.eql("Invalid NNU Type");
      expect(err.details).to.be.eql("NNU must be a String or a Number.");
      expect(err).to.be.instanceof(ValidationError);
    }
  });

  it("should fail on Strings not only numerical", () => {
    try {
      isValidNNU("abcd");
      isValidNNU("ab3456kls");
      isValidNNU("987tre432");
      isValidNNU("");
      isValidNNU("    ");
    } catch (err) {
      expect(err.name).to.be.eql("ValidationError");
      expect(err.message).to.be.eql("Invalid NNU Syntax");
      expect(err.details).to.be.eql(
        "NNU must have 9 digits, and can not start with 0 or 8."
      );
      expect(err).to.be.instanceof(ValidationError);
    }
  });

  it("should fail on wrong size", () => {
    try {
      // #8 or less
      isValidNNU("1234567");
      isValidNNU(1234567);
      isValidNNU("123456");
      isValidNNU(123456);
      isValidNNU("12345");
      isValidNNU(12345);
      isValidNNU("1234");
      isValidNNU(1234);
      // #10 or more
      isValidNNU("123456789");
      isValidNNU(123456789);
      isValidNNU("1234567810");
      isValidNNU(1234567810);
      isValidNNU("123456789112");
      isValidNNU(123456789112);
    } catch (err) {
      expect(err.name).to.be.eql("ValidationError");
      expect(err.message).to.be.eql("Invalid NNU Syntax");
      expect(err.details).to.be.eql(
        "NNU must have 9 digits, and can not start with 0 or 8."
      );
      expect(err).to.be.instanceof(ValidationError);
    }
  });

  it("should fail if 1st digit 0||8", () => {
    try {
      isValidNNU("034567892");
      isValidNNU("834567892");
    } catch (err) {
      expect(err.name).to.be.eql("ValidationError");
      expect(err.message).to.be.eql("Invalid NNU Syntax");
      expect(err.details).to.be.eql(
        "NNU must have 9 digits, and can not start with 0 or 8."
      );
      expect(err).to.be.instanceof(ValidationError);
    }
  });

  it("should fail if check digit mismatch", () => {
    try {
      isValidNNU("111156118");
    } catch (err) {
      expect(err.name).to.be.eql("ValidationError");
      expect(err.message).to.be.eql("Invalid NNU CheckDigit");
      expect(err.details).to.be.eql("Check digits do not match.");
      expect(err).to.be.instanceof(ValidationError);
    }
  });
});
