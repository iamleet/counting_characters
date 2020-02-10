import sinonChai from 'sinon-chai';
import sinon from 'sinon';
import chai from 'chai';
import td from "testdouble";

global.window = {};

// Assertion and stubbing utilities
chai.use(sinonChai);
global.expect = chai.expect;
global.sinon = sinon;
global.chai = chai;
global.td = td;

global.catchError = function(title, e) {
  console.log('[Error] ', title);
  console.log(e);
  throw e.toString();
}

global.atob = (str) => {
  return str;
}

global.btoa = (str) => {
  return str;
}