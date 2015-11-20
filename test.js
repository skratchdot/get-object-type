/*eslint no-new-object:0, no-array-constructor:0 */
'use strict';
var expect = require('chai').expect;
var getType = require('./index.js');

describe('get-object-type', function () {
	it('should return the correct types', function () {
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
		tests.forEach(function (item) {
			var result = getType(item[0]);
			expect(result).to.equal(item[1]);
		});
	});
});
