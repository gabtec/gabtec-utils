import { ValidationError } from "../errors/ValidationError.js";
import { isValidPhoneNumber } from "./isValidPhoneNumber.js";

/**
 * Validates an array of portuguese phone numbers (mobile or landline)
 * @param {Array} phonesList
 * @paramArray {String | Number}
 * @throws { ValidatinError } - if invalid
 * @returns { Boolean } true - if OK
 */
export function isValidArrayOfPhoneNumbers(phonesList) {
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
