require('../helpers');
const sinon = require('sinon');

const clearScreen = require('../../lib/cli-utils/clearScreen');

describe('CLI_UTILS:: #clearScreen Test Suite', () => {
  let myStub;

  beforeEach(function() {
    var base = process.stdout;
    myStub = sinon.stub(base, 'write');
  });

  it('should call process.stdout.write', () => {
    clearScreen();
    myStub.restore(); // otherwise I don't see the output of the test

    expect(myStub.calledOnce).to.be.true;
  })

  it('should call process.stdout.write with args', () => {
    clearScreen();
    myStub.restore(); // otherwise I don't see the output of the test

    expect(myStub.getCall(0).args[0]).to.be.eql('\033c');
  })
});