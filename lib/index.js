// module.exports = {
//   cliUtils: require("./cli-utils/_index"),
//   errors: require("./errors/_index"),
//   string: require("./stringTools/_index"),
//   validators: require("./validators/_index"),
// };

// export * from "./cli-utils/_index.js";
// export * from "./errors/_index.js";
// export * from "./stringTools/_index.js";
// export * from "./validators/_index.js";

export { crop } from "./stringTools/crop.js";
export { upperFirst } from "./stringTools/upperFirst.js";
export { zeroPadding } from "./stringTools/zero-padding.js";
export { isValidArrayOfPhoneNumbers } from "./validators/isValidArrayOfPhoneNumbers.js";
export { isValidNISS } from "./validators/isValidNISS.js";
export { isValidNNU } from "./validators/isValidNNU.js";
export { isValidPhoneNumber } from "./validators/isValidPhoneNumber.js";
export { ValidationError } from "./errors/ValidationError.js";
export { clearScreen } from "./cli-utils/clearScreen.js";

// export default {
//   clearScreen,
//   truncate: crop,
//   crop,
//   upperFirst,
//   zeroPadding,
//   isValidArrayOfPhoneNumbers,
//   isValidNISS,
//   isValidNNU,
//   isValidPhoneNumber,
//   ValidationError,
// };
