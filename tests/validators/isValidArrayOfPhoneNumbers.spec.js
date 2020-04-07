const isValidArrayOfPhoneNumbers = require("../../lib/validators/isValidArrayOfPhoneNumbers");

describe("VALIDATORS:: #isValidArrayOfPhoneNumbers Test Suite", () => {
  it("should pass -- Happy Path", () => {
    const list = ["236210021", 236210021, "961589237", 961589237];

    try {
      expect(isValidArrayOfPhoneNumbers(list)).to.be.true;
    } catch (err) {
      if (err instanceof AssertionError) {
        throw err;
      }
    }
  });

  it("should fail if Array items not String | Number", () => {
    const list = [{ will: "fail" }, null, [], ["912000123", 236922125]];

    try {
      isValidArrayOfPhoneNumbers(list);
    } catch (err) {
      if (err instanceof AssertionError) {
        throw err;
      }
      expect(err.name).to.be.eql("ValidationError");
      expect(err.message).to.be.eql("Invalid PhoneNumber Type");
      expect(err.details).to.be.eql(
        "PhoneNumber must be a String or a Number."
      );
      expect(err).to.be.instanceof(ValidationError);
    }
  });

  it("should fail if not an Array", () => {
    try {
      isValidArrayOfPhoneNumbers();
      isValidArrayOfPhoneNumbers(undefined);
      isValidArrayOfPhoneNumbers(null);
      isValidArrayOfPhoneNumbers(true);
      isValidArrayOfPhoneNumbers(false);
      isValidArrayOfPhoneNumbers(12345);
      isValidArrayOfPhoneNumbers("some text");
      isValidArrayOfPhoneNumbers({});
      isValidArrayOfPhoneNumbers(NaN);
    } catch (err) {
      if (err instanceof AssertionError) {
        throw err;
      }
      expect(err.name).to.be.eql("ValidationError");
      expect(err.message).to.be.eql("Invalid PhoneList Type");
      expect(err.details).to.be.eql("PhoneList must be an Array.");
      expect(err).to.be.instanceof(ValidationError);
    }
  });

  it("should fail if PhoneList items not valid PhoneNumbers", () => {
    const list = ["736210021", 736210021, "96", 9615892987653337];

    try {
      isValidArrayOfPhoneNumbers(list);
    } catch (err) {
      if (err instanceof AssertionError) {
        throw err;
      }
      expect(err.name).to.be.eql("ValidationError");
      expect(err.message).to.be.eql("Invalid PhoneNumber Syntax");
      expect(err.details).to.be.eql(
        "PhoneNumber must have 9 digits, and start with 2 or 9."
      );
      expect(err).to.be.instanceof(ValidationError);
    }
  });
});
