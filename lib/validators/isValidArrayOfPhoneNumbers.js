const ValidationError = require("../errors/ValidationError");
const isValidPhoneNumber = require("./isValidPhoneNumber");
/**
 * Validates an array of portuguese phone numbers (mobile or landline)
 * @param {Array} phonesList
 * @paramArray {String | Number}
 * @throws { ValidatinError } - if invalid
 * @returns { Boolean } true - if OK
 */
function isValidArrayOfPhoneNumbers(phonesList) {
  if (!Array.isArray(phonesList)) {
    throw new ValidationError(
      "Invalid PhoneList Type",
      "PhoneList must be an Array."
    );
  }

  let result;

  phonesList.forEach(function (item) {
    result = isValidPhoneNumber(item);
  });

  return result;
}

module.exports = isValidArrayOfPhoneNumbers;
