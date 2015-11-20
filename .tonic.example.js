var getType = require('get-object-type');
var r1 = getType(null); // returns 'Null'
var r2 = getType([]); // returns 'Array'
var r3 = getType({foo: 'bar'}); // returns 'Object'
var r4 = getType(42); // returns 'Number'
console.log(r1, r2, r3, r4);
