import { expect } from "chai";
import { isValidPhoneNumber } from "../../lib/validators/isValidPhoneNumber.js";
import { ValidationError } from "../../lib/index.js";

describe("VALIDATORS:: #isValidPhoneNumber Test Suite", () => {
  it("should pass -- Happy Path", () => {
    expect(isValidPhoneNumber("236210021")).to.not.throw;
    expect(isValidPhoneNumber("210210021")).to.not.throw;
    expect(isValidPhoneNumber("911589233")).to.not.throw;
    expect(isValidPhoneNumber("924567232")).to.not.throw;
    expect(isValidPhoneNumber("934589239")).to.not.throw;
    expect(isValidPhoneNumber("961589237")).to.not.throw;
    expect(isValidPhoneNumber(236210021)).to.not.throw;
    expect(isValidPhoneNumber(210210021)).to.not.throw;
    expect(isValidPhoneNumber(911589233)).to.not.throw;
    expect(isValidPhoneNumber(924567232)).to.not.throw;
    expect(isValidPhoneNumber(934589239)).to.not.throw;
    expect(isValidPhoneNumber(961589237)).to.not.throw;
  });

  it("should fail if not a String or a Number", () => {
    try {
      isValidPhoneNumber();
      isValidPhoneNumber(undefined);
      isValidPhoneNumber(null);
      isValidPhoneNumber(true);
      isValidPhoneNumber(false);
      isValidPhoneNumber([]);
      isValidPhoneNumber({});
      isValidPhoneNumber(NaN);
    } catch (err) {
      expect(err.name).to.be.eql("ValidationError");
      expect(err.message).to.be.eql("Invalid PhoneNumber Type");
      expect(err.details).to.be.eql(
        "PhoneNumber must be a String or a Number."
      );
      expect(err).to.be.instanceof(ValidationError);
    }
  });

  it("should fail on Strings not only numerical", () => {
    try {
      isValidPhoneNumber("abcd");
      isValidPhoneNumber("ab3456kls");
      isValidPhoneNumber("987tre432");
      isValidPhoneNumber("");
      isValidPhoneNumber("    ");
    } catch (err) {
      expect(err.name).to.be.eql("ValidationError");
      expect(err.message).to.be.eql("Invalid PhoneNumber Syntax");
      expect(err.details).to.be.eql(
        "PhoneNumber must have 9 digits, and start with 2 or 9."
      );
      expect(err).to.be.instanceof(ValidationError);
    }
  });

  it("should fail on wrong size", () => {
    try {
      // #8 or less
      isValidPhoneNumber("9234567");
      isValidPhoneNumber(9234567);
      isValidPhoneNumber("923456");
      isValidPhoneNumber(923456);
      isValidPhoneNumber("92345");
      isValidPhoneNumber(92345);
      isValidPhoneNumber("9234");
      isValidPhoneNumber(9234);
      // #10 or more
      isValidPhoneNumber("923456789");
      isValidPhoneNumber(923456789);
      isValidPhoneNumber("9234567890");
      isValidPhoneNumber(9234567890);
      isValidPhoneNumber("923456789992");
      isValidPhoneNumber(923456789992);
    } catch (err) {
      expect(err.name).to.be.eql("ValidationError");
      expect(err.message).to.be.eql("Invalid PhoneNumber Syntax");
      expect(err.details).to.be.eql(
        "PhoneNumber must have 9 digits, and start with 2 or 9."
      );
      expect(err).to.be.instanceof(ValidationError);
    }
  });

  it("should fail if 1st digit not 2||9", () => {
    try {
      isValidPhoneNumber("034567892");
      isValidPhoneNumber("134567892");
      isValidPhoneNumber("334567892");
      isValidPhoneNumber("434567892");
      isValidPhoneNumber("534567892");
      isValidPhoneNumber("634567892");
      isValidPhoneNumber("734567892");
      isValidPhoneNumber("834567892");
    } catch (err) {
      expect(err.name).to.be.eql("ValidationError");
      expect(err.message).to.be.eql("Invalid PhoneNumber Syntax");
      expect(err.details).to.be.eql(
        "PhoneNumber must have 9 digits, and start with 2 or 9."
      );
      expect(err).to.be.instanceof(ValidationError);
    }
  });
});
