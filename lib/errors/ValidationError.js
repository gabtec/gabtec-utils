class ValidationError extends Error {
  constructor (message, details) {
    super(message)
    this.name = this.constructor.name
    this.details = details
  }

  // static isError(err){
  //   return err instanceof this;
  // };
}

module.exports = ValidationError
