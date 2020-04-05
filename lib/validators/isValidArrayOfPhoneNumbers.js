const ValidationError = require('../errors/ValidationError')
const isValidPhoneNumber = require('./isValidPhoneNumber')
/**
 * Validates an array of portuguese phone numbers (mobile or landline)
 * @param {Array} phonesList
 * @paramArray {String | Number}
 */
function isValidArrayOfPhoneNumbers (phonesList) {
  if (!Array.isArray(phonesList)) {
    throw new ValidationError('Invalid PhoneList Type', 'PhoneList must be an Array.')
  }

  phonesList.forEach(function (item) {
    try {
      return isValidPhoneNumber(item)
    } catch (error) {
      throw error
    }
  })
}

module.exports = isValidArrayOfPhoneNumbers
