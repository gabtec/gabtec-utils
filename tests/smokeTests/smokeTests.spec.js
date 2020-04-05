const lib = require('../../lib/index');

describe('GABTEC-UTILS exposes...', () => {
  context('Root objects', () => {
    it('should expose "cliUtils" object', () => {
      expect(lib.cliUtils).to.be.exist;
      expect(lib.cliUtils).to.be.instanceOf(Object);
    })

    it('should expose "errors" object', () => {
      expect(lib.errors).to.be.exist;
      expect(lib.errors).to.be.instanceOf(Object);
    })

    it('should expose "validators" object', () => {
      expect(lib.validators).to.be.exist;
      expect(lib.validators).to.be.instanceOf(Object);
    })
  })

  context('".cliUtils" functions', () => {
    it('should expose "clearScreen" function', () => {
      expect(lib.cliUtils.clearScreen).to.be.exist;
      expect(lib.cliUtils.clearScreen).to.be.instanceOf(Function);
    })
  })

  context('".errors" functions', () => {
    it('should expose "ValidationError" class', () => {
      expect(lib.errors.ValidationError).to.be.exist;
      expect(lib.errors.ValidationError).to.be.instanceOf(Function);
    })
  })

  context('".validators" functions', () => {
    it('should expose "isValidArrayOfPhoneNumbers" function', () => {
      expect(lib.validators.isValidArrayOfPhoneNumbers).to.be.exist;
      expect(lib.validators.isValidArrayOfPhoneNumbers).to.be.instanceOf(Function);
    })
    it('should expose "isValidNISS" function', () => {
      expect(lib.validators.isValidNISS).to.be.exist;
      expect(lib.validators.isValidNISS).to.be.instanceOf(Function);
    })
    it('should expose "isValidNNU" function', () => {
      expect(lib.validators.isValidNNU).to.be.exist;
      expect(lib.validators.isValidNNU).to.be.instanceOf(Function);
    })
    it('should expose "isValidPhoneNumber" function', () => {
      expect(lib.validators.isValidPhoneNumber).to.be.exist;
      expect(lib.validators.isValidPhoneNumber).to.be.instanceOf(Function);
    })
  })
})