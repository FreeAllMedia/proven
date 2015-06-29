import {isNotEmpty, isAssigned, isNumber} from "../lib/validation.js";
//For the implementation I like this nice npm module here: at https://github.com/philbooth/check-types.js
//also I think it will be more useful to have the same kind of "generic" object validator instead of just "parameters"
//the validate npm module is also cool, and validator.js is too verbose for me
describe("Validation()", () => {
	const trueValue = {result: true};
	let falseValue;

	describe("(functions)", () => {
		describe(".isNotEmpty", () => {
			before(() => {
				falseValue = {result: false, message: "cannot be empty"};
			});

			it("should return a function", () => {
				(typeof isNotEmpty).should.equal("function");
			});//the idea is to return a predicate
			describe("(returned function)", () => {
				it("should return a default error message when false", () => {
					isNotEmpty.call({a: undefined}, "a").should.have.property("message");
				});
				it("should return false if the object is undefined", () => {
					isNotEmpty.call({a: undefined}, "a").should.eql(falseValue);
				});
				it("should return false if the object is null", () => {
					isNotEmpty.call({a: null}, "a").should.eql(falseValue);
				});
				it("should return false if the object is an empty array", () => {
					isNotEmpty.call({a: []}, "a").should.eql(falseValue);
				});
				it("should return true if the object has some object on it", () => {
					isNotEmpty.call({a: {}}, "a").should.eql(trueValue);
				});
				it("should return true if the object has some string on it", () => {
					isNotEmpty.call({a: "good"}, "a").should.eql(trueValue);
				});
				it("should return true if the object has some integer on it", () => {
					isNotEmpty.call({a: 1}, "a").should.eql(trueValue);
				});
				it("should return true if the object has some function on it", () => {
					isNotEmpty.call({a: function () {}}, "a").should.eql(trueValue);
				});
				it("should return true if provided a non-empty Array", () => {
					isNotEmpty.call({a: [1]}, "a").should.eql(trueValue);
				});
				it("should provide an async interface", done => {
					isNotEmpty.call({a: [1]}, "a", () => {
						done();
					});
				});
			});
		});

		describe(".isAssigned", () => {
			before(() => {
				falseValue = {result: false, message: "must be assigned"};
			});

			it("should return a function", () => {
				(typeof isAssigned).should.equal("function");
			});
			describe("(returned function)", () => {
				it("should return a default error message when false", () => {
					isAssigned.call({a: null}, "a").should.have.property("message");
				});
				it("should throw an specific error object if the source is null", () => {
					isAssigned.call({a: null}, "a").should.eql(falseValue);
				});
				it("should throw an specific error object if the source is undefined", () => {
					isAssigned.call({a: undefined}, "a").should.eql(falseValue);
				});
				it("should return true if it has an object", () => {
					isAssigned.call({a: {}}, "a").should.eql(trueValue);
				});
				it("should return true if it has a number", () => {
					isAssigned.call({a: 3}, "a").should.eql(trueValue);
				});
				it("should return true if it has an array", () => {
					isAssigned.call({a: []}, "a").should.eql(trueValue);
				});
			});
		});

		describe(".isNumber", () => {
			before(() => {
				falseValue = {result: false, message: "must be a number"};
			});

			it("should return a function", () => {
				(typeof isNumber).should.equal("function");
			});
			describe("(returned function)", () => {
				it("should return a default error message when false", () => {
					isAssigned.call({a: null}, "a").should.have.property("message");
				});
				it("should throw an specific error object if the source is null", () => {
					isNumber.call({a: null}, "a").should.eql(falseValue);
				});
				it("should throw an specific error object if the source is undefined", () => {
					isNumber.call({a: undefined}, "a").should.eql(falseValue);
				});
				it("should return false if it has an object", () => {
					isNumber.call({a: {}}, "a").should.eql(falseValue);
				});
				it("should return true if it has a number", () => {
					isNumber.call({a: 3}, "a").should.eql(trueValue);
				});
				it("should return true if it has a string number", () => {
					isNumber.call({a: "3"}, "a").should.eql(trueValue);
				});
				it("should return true if it has a string not a number", () => {
					isNumber.call({a: "z"}, "a").should.eql(falseValue);
				});
				it("should return false if it has an array", () => {
					isNumber.call({a: []}, "a").should.eql(falseValue);
				});
			});
		});
	});
});
