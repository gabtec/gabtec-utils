/**
 * Documentation:
 * --------------
 *   Portaria n.º 1483/2004 @ https://dre.pt/pesquisa/-/search/219725/details/maximized
 *   Algorithm @ http://maracujah.net/files/software/NISS.pdf
 */

const ValidationError = require("../errors/ValidationError");

/**
 * @param { String | Number } niss
 * @throws { ValidatinError } - if invalid
 * @returns { Boolean } true - if OK
 */
function isValidNISS(niss) {
  if (!(typeof niss === "string" || typeof niss === "number")) {
    throw new ValidationError(
      "Invalid NISS Type",
      "NISS must be a String or a Number."
    );
  }

  niss = String(niss);

  // Must have 11 digits
  // 1st digit must be 1=singular person, OR 2=collective person
  if (!/^[1|2]\d{10}$/g.test(niss)) {
    throw new ValidationError(
      "Invalid NISS Syntax",
      "NISS must have 11 digits, and start with 1 or 2."
    );
  }

  const arrayNISS = niss
    .split("")
    .reverse()
    .map((sp) => parseInt(sp, 10));
  const arrayFactors = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29]; // based on prime numbers

  let total = 0;
  let i = 1; // ignore control digit
  const loops = arrayNISS.length;

  // multiply and sum
  for (i; i < loops; i++) {
    total = total + arrayNISS[i] * arrayFactors[i];
  }

  const rest = total % 10;
  const control = 9 - rest;

  if (control === arrayNISS[0]) {
    return true;
  } else {
    throw new ValidationError(
      "Invalid NISS CheckDigit",
      "Check digits do not match."
    );
  }
}

module.exports = isValidNISS;
