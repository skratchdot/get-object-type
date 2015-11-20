# get-object-type

[![NPM version](https://badge.fury.io/js/get-object-type.svg)](http://badge.fury.io/js/get-object-type)
[![Build Status](https://travis-ci.org/skratchdot/get-object-type.png?branch=master)](https://travis-ci.org/skratchdot/get-object-type)
[![Code Climate](https://codeclimate.com/github/skratchdot/get-object-type.png)](https://codeclimate.com/github/skratchdot/get-object-type)
[![Coverage Status](https://coveralls.io/repos/skratchdot/get-object-type/badge.svg?branch=master&service=github)](https://coveralls.io/github/skratchdot/get-object-type?branch=master)
[![Dependency Status](https://david-dm.org/skratchdot/get-object-type.svg)](https://david-dm.org/skratchdot/get-object-type)
[![devDependency Status](https://david-dm.org/skratchdot/get-object-type/dev-status.svg)](https://david-dm.org/skratchdot/get-object-type#info=devDependencies)

[![NPM](https://nodei.co/npm/get-object-type.png)](https://npmjs.org/package/get-object-type)


## Description

get the type of a javascript object as a string.  an alternative to using typeof checks.

NOTE: I've re-written / used this function so many different times, I decided to publish it
as a module.

## Getting Started

Install the module with: `npm install get-object-type`

```javascript
var getType = require('get-object-type');
getType(null); // returns 'Null'
getType([]); // returns 'Array'
getType({foo: 'bar'}); // returns 'Object'
getType(42); // returns 'Number'
```

- [Live example on Tonic](https://tonicdev.com/npm/get-object-type)


## License

Copyright (c) 2014 skratchdot  
Licensed under the MIT license.
