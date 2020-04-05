# gabtec-utils

[![Build Status](https://travis-ci.org/gabtec/gabtec-utils.svg?branch=master)](https://travis-ci.org/gabtec/gabtec-utils)
[![Coverage Status](https://coveralls.io/repos/github/gabtec/gabtec-utils/badge.svg?branch=master)](https://coveralls.io/github/gabtec/gabtec-utils?branch=master)

This project started from the nead to learn Github.
But now it is a package of usefull tools, that I've collected from my other projects.
The docs are a work in progress, for now.

# install

```javascript
$ npm install --save https://github.com/gabtec/gabtec-utils.git
```

### Module

The module exposes tree sub-modules:
- **cliUtils:** some command line utils
- **errors:** some custom Error that extend JS Error Object
- **validators:** validation tools

#### Import

* The all module

```js
const gtUtils = require('gabtec-utils');
```

* Some sub-module

```js
const gtValidators = require('gabtec-utils').validators;
```

#### Using

```js
const SSNumber = '11115234567';
try{
  var result = gtValidators.isValidNISS(SSNumber);
  // will return true if is valid
}catch(err){
  console.error(err);
  // will throw a custom ValidationError
  // err.name = 'ValidationError'
  // err.message = 'Invalid NISS Syntax'
  // err.details = 'NISS must have 11 digits, and start with 1 or 2.'
}

```

## Documentation

Documentation is WIP ...  :(

### Index

#### cliUtils

- **cleanScreen()**

#### errors

- **ValidationError(message, details)**

#### validators

- **isValidArrayOfPhoneNumbers(phonesList)**
- **isValidNISS(niss)**
- **isValidNNU(nnu)**
- **isValidPhoneNumber(phoneNumber)**

## License

MIT