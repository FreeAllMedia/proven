"use strict";

var _libValidationJs = require("../lib/validation.js");

//For the implementation I like this nice npm module here: at https://github.com/philbooth/check-types.js
//also I think it will be more useful to have the same kind of "generic" object validator instead of just "parameters"
//the validate npm module is also cool, and validator.js is too verbose for me
describe("Validation()", function () {
	var trueValue = { result: true };
	var falseValue = undefined;

	describe("(functions)", function () {
		describe(".isNotEmpty", function () {
			before(function () {
				falseValue = { result: false, message: "cannot be empty" };
			});

			it("should return a function", function () {
				(typeof _libValidationJs.isNotEmpty).should.equal("function");
			}); //the idea is to return a predicate
			describe("(returned function)", function () {
				it("should return a default error message when false", function () {
					_libValidationJs.isNotEmpty.call({ a: undefined }, "a").should.have.property("message");
				});
				it("should return false if the object is undefined", function () {
					_libValidationJs.isNotEmpty.call({ a: undefined }, "a").should.eql(falseValue);
				});
				it("should return false if the object is null", function () {
					_libValidationJs.isNotEmpty.call({ a: null }, "a").should.eql(falseValue);
				});
				it("should return false if the object is an empty array", function () {
					_libValidationJs.isNotEmpty.call({ a: [] }, "a").should.eql(falseValue);
				});
				it("should return true if the object has some object on it", function () {
					_libValidationJs.isNotEmpty.call({ a: {} }, "a").should.eql(trueValue);
				});
				it("should return true if the object has some string on it", function () {
					_libValidationJs.isNotEmpty.call({ a: "good" }, "a").should.eql(trueValue);
				});
				it("should return true if the object has some integer on it", function () {
					_libValidationJs.isNotEmpty.call({ a: 1 }, "a").should.eql(trueValue);
				});
				it("should return true if the object has some function on it", function () {
					_libValidationJs.isNotEmpty.call({ a: function a() {} }, "a").should.eql(trueValue);
				});
				it("should return true if provided a non-empty Array", function () {
					_libValidationJs.isNotEmpty.call({ a: [1] }, "a").should.eql(trueValue);
				});
				it("should provide an async interface", function (done) {
					_libValidationJs.isNotEmpty.call({ a: [1] }, "a", function () {
						done();
					});
				});
			});
		});

		describe(".isAssigned", function () {
			before(function () {
				falseValue = { result: false, message: "must be assigned" };
			});

			it("should return a function", function () {
				(typeof _libValidationJs.isAssigned).should.equal("function");
			});
			describe("(returned function)", function () {
				it("should return a default error message when false", function () {
					_libValidationJs.isAssigned.call({ a: null }, "a").should.have.property("message");
				});
				it("should throw an specific error object if the source is null", function () {
					_libValidationJs.isAssigned.call({ a: null }, "a").should.eql(falseValue);
				});
				it("should throw an specific error object if the source is undefined", function () {
					_libValidationJs.isAssigned.call({ a: undefined }, "a").should.eql(falseValue);
				});
				it("should return true if it has an object", function () {
					_libValidationJs.isAssigned.call({ a: {} }, "a").should.eql(trueValue);
				});
				it("should return true if it has a number", function () {
					_libValidationJs.isAssigned.call({ a: 3 }, "a").should.eql(trueValue);
				});
				it("should return true if it has an array", function () {
					_libValidationJs.isAssigned.call({ a: [] }, "a").should.eql(trueValue);
				});
			});
		});

		describe(".isNumber", function () {
			before(function () {
				falseValue = { result: false, message: "must be a number" };
			});

			it("should return a function", function () {
				(typeof _libValidationJs.isNumber).should.equal("function");
			});
			describe("(returned function)", function () {
				it("should return a default error message when false", function () {
					_libValidationJs.isAssigned.call({ a: null }, "a").should.have.property("message");
				});
				it("should throw an specific error object if the source is null", function () {
					_libValidationJs.isNumber.call({ a: null }, "a").should.eql(falseValue);
				});
				it("should throw an specific error object if the source is undefined", function () {
					_libValidationJs.isNumber.call({ a: undefined }, "a").should.eql(falseValue);
				});
				it("should return false if it has an object", function () {
					_libValidationJs.isNumber.call({ a: {} }, "a").should.eql(falseValue);
				});
				it("should return true if it has a number", function () {
					_libValidationJs.isNumber.call({ a: 3 }, "a").should.eql(trueValue);
				});
				it("should return true if it has a string number", function () {
					_libValidationJs.isNumber.call({ a: "3" }, "a").should.eql(trueValue);
				});
				it("should return true if it has a string not a number", function () {
					_libValidationJs.isNumber.call({ a: "z" }, "a").should.eql(falseValue);
				});
				it("should return false if it has an array", function () {
					_libValidationJs.isNumber.call({ a: [] }, "a").should.eql(falseValue);
				});
			});
		});
	});
});