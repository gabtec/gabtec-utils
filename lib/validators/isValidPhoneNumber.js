import { ValidationError } from "../errors/ValidationError.js";

/**
 * Validates a portuguese phone number (mobile or landline)
 * @param { String | Number } phoneNumber
 * @throws { ValidatinError } - if invalid
 * @returns { Boolean } true - if OK
 */
export function isValidPhoneNumber(phoneNumber) {
  if (!(typeof phoneNumber === "string" || typeof phoneNumber === "number")) {
    throw new ValidationError(
      "Invalid PhoneNumber Type",
      "PhoneNumber must be a String or a Number."
    );
  }

  const result = /^[2|9]\d{8}$/g.test(phoneNumber);

  if (result) {
    return true;
  } else {
    throw new ValidationError(
      "Invalid PhoneNumber Syntax",
      "PhoneNumber must have 9 digits, and start with 2 or 9."
    );
  }
}
