'use strict';
/*
======== A Handy Little Nodeunit Reference ========
https://github.com/caolan/nodeunit

Test methods:
	test.expect(numAssertions)
	test.done()
Test assertions:
	test.ok(value, [message])
	test.equal(actual, expected, [message])
	test.notEqual(actual, expected, [message])
	test.deepEqual(actual, expected, [message])
	test.notDeepEqual(actual, expected, [message])
	test.strictEqual(actual, expected, [message])
	test.notStrictEqual(actual, expected, [message])
	test.throws(block, [error], [message])
	test.doesNotThrow(block, [error], [message])
	test.ifError(value)
*/
var getType = require('./index.js');

exports['object-path-get'] = {
	setUp: function (done) {
		// setup here
		done();
	},
	'types': function (test) {
		var tests = [
			[new Date(), 'Date'],
			['foo', 'String'],
			[12, 'Number'],
			[parseInt('a', 10), 'Number'], // NaN
			[null, 'Null'],
			[undefined, 'Undefined'],
			[{}, 'Object'],
			[new Object(), 'Object'],
			[function () {}, 'Function'],
			[new Function(''), 'Function'],
			[[], 'Array'],
			[new Array(), 'Array']
		];
		test.expect(tests.length);
		tests.forEach(function (item, i) {
			var result = getType(item[0]);
			test.equal(result, item[1], 'expecting: ' + item[1] + 'from test #' + i + ', got: ' + result);
		});
		test.done();
	}
};
