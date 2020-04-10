const chai = require("chai");
const AssertionError = require("assert").AssertionError;
const ValidationError = require("../lib/errors/ValidationError.js");

global.expect = chai.expect;
global.AssertionError = AssertionError;
global.ValidationError = ValidationError;
