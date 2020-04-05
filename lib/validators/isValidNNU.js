/**
 * Documentation:
 * --------------
 *    Rules: Decreto-Lei n.º 198/95 artº 6 nº 2
 *    Decreto-Lei n.º 48/97 (new address, same number)
 *    Portaria n.º 161-A/97 (new dimentions, isenções)
 *    Portaria n.º 981/95 nº 4 (defines algorithm MOD 11-2, ISO7064)
 *      mathematical details @https://www.eurocode.org/guides/checkdig/english/examples.html
 *    Códigos do 1º digito @http://www.acss.min-saude.pt/wp-content/uploads/2017/08/Regulamento-Registo-Nac.-Utentes.pdf
 */

const ValidationError = require('../errors/validationError')

/**
 * @param {String | Number} nnu
 */
function isValidNNU (nnu) {
  if (!(typeof nnu === 'string' || typeof nnu === 'Number')) {
    throw new ValidationError('Invalid NNU Type', 'NNU must be a String or a Number.')
  }

  nnu = String(nnu)

  // Must have 9 digits
  // 1st digit can not be 0 or 8
  if (!/^[1-7|9]\d{8}$/g.test(nnu)) {
    throw new ValidationError('Invalid NNU Syntax', 'NNU must have 9 digits, and can not start with 0 or 8.')
  }

  const arrayNNU = nnu.split('').map(sp => parseInt(sp, 10))
  let rest = 10 // Must start as 10
  const loops = arrayNNU.length - 1 // Remove last digit because is the control
  let i = 0

  for (i; i < loops; i++) {
    let k = 0
    const sum = arrayNNU[i] + rest
    // MOD 10
    k = (sum < 11) ? sum : (sum - 10)

    const doble = k * 2

    rest = (doble < 11) ? doble : (doble - 11)
  }

  const control = (11 - rest) % 10

  if (control === arrayNNU[loops]) {
    return true
  } else {
    throw new ValidationError('Invalid NNU CheckDigit', 'Check digits do not match.')
  }
}

module.exports = isValidNNU
