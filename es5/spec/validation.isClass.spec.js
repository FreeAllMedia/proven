"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _libValidationJs = require("../lib/validation.js");

describe("Validation()", function () {
	var trueValue = { result: true };
	var falseValue = { result: false };

	describe("isClass(value)", function () {
		var value = undefined;

		describe("(When Value is a Class)", function () {
			beforeEach(function () {
				value = function MyClass() {
					_classCallCheck(this, MyClass);
				};
			});

			it("should return result true", function () {
				(0, _libValidationJs.isClass)(value).should.eql(trueValue);
			});
		});

		describe("(When Value is not a Class)", function () {
			beforeEach(function () {
				value = function myFunction() {};
			});

			it("should return result false", function () {
				(0, _libValidationJs.isClass)(value).should.eql(falseValue);
			});
		});
	});
});