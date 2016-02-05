import {isClass} from "../lib/validation.js";

describe("Validation()", () => {
	const trueValue = {	result: true };
	const falseValue = { result: false };

	describe("isClass(value)", () => {
		let value;

		describe("(When Value is a Class)", () => {
			beforeEach(() => {
				value = class MyClass {};
			});

			it("should return result true", () => {
				isClass(value).should.eql(trueValue);
			});
		});

		describe("(When Value is not a Class)", () => {
			beforeEach(() => {
				value = function myFunction() {};
			});

			it("should return result false", () => {
				isClass(value).should.eql(falseValue);
			});
		});
	});
});
