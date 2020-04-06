# gabtec-utils
---
[![npm version](https://badge.fury.io/js/gabtec-utils.svg)](https://badge.fury.io/js/gabtec-utils)
[![Build Status](https://travis-ci.org/gabtec/gabtec-utils.svg?branch=master)](https://travis-ci.org/gabtec/gabtec-utils)
[![Coverage Status](https://coveralls.io/repos/github/gabtec/gabtec-utils/badge.svg?branch=master)](https://coveralls.io/github/gabtec/gabtec-utils?branch=master)

This project started from the nead to learn Github.
But now it is a package of usefull tools, that I've collected from my other projects.
The docs are a work in progress, for now.
Mainly this lib provides usefull validation functions, for portuguese applications.

* [Installation](#installation)
* [Usage](#usage)
* [Documentation](#documentation)
  * [cliUtils](#cli-utils)
    * [cleanScreen()](#cleanscreen)
  * [errors](#errors)
    * [ValidationError()](#validationerror)
  * [validators](#validators)
    * [isValidNISS()](#isvalidniss)
    * [isValidNNU()](#isvalidnnu)
    * [isValidPhoneNumber()](#isvalidphonenumber)
    * [isValidArrayOfPhoneNumbers()](#isvalidarrayofphonenumbers)
* [License](#license)
* [Author](#author)


## Installation

```javascript
$ npm i gabtec-utils
```

## Usage

### Using the all lib

```js
const gtUtils = require('gabtec-utils');
```

### Using a sub-module
The lib exposes 3 sub-modules:
* `cliUtils`  : tools to use on command line output
* `errors`    : some JS custom validation error, that extend from Error
* `validators`: functions to validade user inputs

```js
const validators = require('gabtec-utils').validators;
```
### Documentation

> ### CLI UTILS:

> #### cleanScreen()
  
  Cleans the command line screen, like ctrl + L, does.


#### _Example_

```js
/**
 * I like to use this on my NodeJS/Express servers.
 * Each time the server reboot, I like to clean the console, and then print a nice banner with the API Name
 * Here is a sample:
 * */
const tools = require('gabtec-utils').cliUtils;
// (...)
if (cluster.isMaster) {
  // ctrl+l
  tools.cleanScreen();

  const motd = BANNER + VERSION + '\n';
  console.log(motd);
  // (...)
} else {
  http.createServer(api).listen(process.env.SRV_PORT);
}
```

> ### ERRORS:

> #### ValidationError()
  
  Constructs a custom javascript error.

#### _Arguments_

* **_{ string } - message_** : The message that describes the error.
* **_{ string } - details_** : (Optional) A more detailed message that helps debugging the error.

#### _Returns_

* **_{ ValidationError }_**: a `ValidationError` instance.

#### _Example_

```js
const ValidationError = require('gabtec-utils').errors.ValidationError;

const err = new ValidationError('Invalid number', 'The number must be less them 10.000');

if(condition){
  throw err;
}

// --> console.error(err);
// err.name = 'ValidationError'
// err.message = 'Invalid number'
// err.details = 'The number must be less them 10.000'
```


> ### VALIDATORS:

> #### isValidNISS()
  
  Validates a portuguese social security number

#### _Arguments_

* **_{ string | number } - niss_** : The social security number to be checked as a string or as a number.

#### _Returns_

* **_{ boolean }_**: `true` if valid.
* **_{ Error }_**: throws `ValidationError` if invalid.

#### _Example_

```js
const validator = require('gabtec-utils').validators;
const SSNumber = '11115234567';

try{
  var result = validator.isValidNISS(SSNumber);
  // will return true if is valid
}catch(err){
  console.error(err);
  // will throw a custom ValidationError
  // err.name = 'ValidationError'
  // err.message = 'Invalid NISS Syntax'
  // err.details = 'NISS must have 11 digits, and start with 1 or 2.'
}
```

> #### isValidNNU()
  
  Validates a portuguese health system, patient nacional number (NNU)

#### _Arguments_

* **_{ string | number } - nnu_** : The patient's nacional number to be checked as a string or as a number.

#### _Returns_

* **_{ boolean }_**: `true` if valid.
* **_{ Error }_**: throws `ValidationError` if invalid.

#### _Example_

```js
const validator = require('gabtec-utils').validators;
const NUNumber = '115234567';

try{
  var result = validator.isValidNNU(NUNumber);
  // will return true if is valid
}catch(err){
  console.error(err);
  // will throw a custom ValidationError
  // err.name = 'ValidationError'
  // err.message = 'Invalid NNU Syntax'
  // err.details = 'NNU must have 9 digits, and not start with 0 or 8.'
}
```

> #### isValidPhoneNumber()
  
  Validates a portuguese personal phone number (mobile or landline).
  _Note:_ it will throw error on special numbers like 808... (that are not for personal use).

#### _Arguments_

* **_{ string | number } - phoneNumber_** : The phone number to be checked as a string or as a number.

#### _Returns_

* **_{ boolean }_**: `true` if valid.
* **_{ Error }_**: throws `ValidationError` if invalid.

#### _Example_

```js
const validator = require('gabtec-utils').validators;
const Phone = '236111567';

try{
  var result = validator.isValidPhoneNumber(Phone);
  // will return true if is valid
}catch(err){
  console.error(err);
  // will throw a custom ValidationError
  // err.name = 'ValidationError'
  // err.message = 'Invalid PhoneNumber Syntax'
  // err.details = 'PhoneNumber must have 9 digits, and start with 2 or 9.'
}
```

> #### isValidArrayOfPhoneNumbers()
  
  Validates a list of portuguese personal phone numbers(mobile or landline).
  _Note:_ for each item on the list, it will use the isValidPhoneNumber() validator.

#### _Arguments_

* **_{ Array } - phonesList_** : The list of phone numbers to be checked. The array items may be String or Number.

#### _Returns_

* **_{ boolean }_**: `true` if valid.
* **_{ Error }_**: throws `ValidationError` if invalid.

#### _Example_

```js
const validator = require('gabtec-utils').validators;
const PhonesList = ['236111567', '961234555'];

try{
  var result = validator.isValidArrayOfPhoneNumbers(PhonesList);
  // will return true if is valid
}catch(err){
  console.error(err);
  // will throw a custom ValidationError
  // err.name = 'ValidationError'
  // err.message = 'Invalid PhoneNumbers Syntax'
  // err.details = 'PhoneNumbers must be an Array.'
}
```

## License

[MIT License](http://www.opensource.org/licenses/mit-license.php)

## Author

[Gabriel Martins *aka gabtec*](https://github.com/gabtec)
