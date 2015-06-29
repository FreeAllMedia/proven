# Proven.js [![npm version](https://img.shields.io/npm/v/proven.svg)](https://www.npmjs.com/package/proven) [![license type](https://img.shields.io/npm/l/proven.svg)](https://github.com/FreeAllMedia/proven.git/blob/master/LICENSE) [![npm downloads](https://img.shields.io/npm/dm/proven.svg)](https://www.npmjs.com/package/proven) ![ECMAScript 6 & 5](https://img.shields.io/badge/ECMAScript-6%20/%205-red.svg)

ES6 Component for validations.

```javascript
import {isNotEmpty} from "proven";

const wallet = {zip: null};

//it returns {result: true|false, message: "some validation message if false"};
if(isNotEmpty.call(wallet, "zip").result) {
  //do something if the wallet has a zip
} else {
  //do something if the wallet has no zip (null or undefined)
}
```

# Quality and Compatibility

[![Build Status](https://travis-ci.org/FreeAllMedia/proven.png?branch=master)](https://travis-ci.org/FreeAllMedia/proven) [![Coverage Status](https://coveralls.io/repos/FreeAllMedia/proven/badge.svg)](https://coveralls.io/r/FreeAllMedia/proven) [![Code Climate](https://codeclimate.com/github/FreeAllMedia/proven/badges/gpa.svg)](https://codeclimate.com/github/FreeAllMedia/proven) [![Dependency Status](https://david-dm.org/FreeAllMedia/proven.png?theme=shields.io)](https://david-dm.org/FreeAllMedia/proven?theme=shields.io) [![Dev Dependency Status](https://david-dm.org/FreeAllMedia/proven/dev-status.svg)](https://david-dm.org/FreeAllMedia/proven?theme=shields.io#info=devDependencies)

*Every build and release is automatically tested on the following platforms:*

![node 0.12.x](https://img.shields.io/badge/node-0.12.x-brightgreen.svg) ![node 0.11.x](https://img.shields.io/badge/node-0.11.x-brightgreen.svg) ![node 0.10.x](https://img.shields.io/badge/node-0.10.x-brightgreen.svg)
![iojs 2.x.x](https://img.shields.io/badge/iojs-2.x.x-brightgreen.svg) ![iojs 1.x.x](https://img.shields.io/badge/iojs-1.x.x-brightgreen.svg)


[![Sauce Test Status](https://saucelabs.com/browser-matrix/proven.svg)](https://saucelabs.com/u/proven)


*If your platform is not listed above, you can test your local environment for compatibility by copying and pasting the following commands into your terminal:*

```
npm install proven
cd node_modules/proven
gulp test-local
```

# Installation

Copy and paste the following command into your terminal to install Proven:

```
npm install proven --save
```

## Import / Require

```
// ES6
import {isEmpty, isAssigned, isNumber} from "proven";
```

```
// ES5
var proven = require("proven");
```

```
// Require.js
define(["require"] , function (require) {
    var proven = require("proven");
});
```

# Getting Started
Proven provide a set of functions to execute validations of different kinds on objects.
They provide both sync and async interfaces, and you should apply them to objects. See below

## Set of functions
* isNotEmpty.call(object, propertyName[, callback])
* isAssigned.call(object, propertyName[, callback])
* isNumber.call(object, propertyName[, callback])

All this functions will return an object, except if a callback is specified, case in which the result object will be returned on the callback using the node style (error, result).

The result object has always a boolean result property and a message property, which will have a string value if result is false.

Note: a falsy validation is not an error, so the result object is always the second parameter on the callback.

# How to Contribute

See something that could use improvement? Have a great feature idea? We listen!

You can submit your ideas through our [issues system](https://github.com/FreeAllMedia/proven/issues), or make the modifications yourself and submit them to us in the form of a [GitHub pull request](https://help.github.com/articles/using-pull-requests/).

We always aim to be friendly and helpful.

## Running Tests

It's easy to run the test suite locally, and *highly recommended* if you're using Proven.js on a platform we aren't automatically testing for.

```
npm test
```
