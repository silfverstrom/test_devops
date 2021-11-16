const assert = require('assert');

function testFunction() {
  return 101;
}

console.log('Executed tests');
assert(testFunction() > 1000);
