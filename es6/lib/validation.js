/**
 * To create a new validator:
 * 1. export a function with one parameter to accept the value being validated.
 * 2. make sure the function returns true or false based upon its validation.
 */

const check = require("check-types");

export function isNotEmpty(name, callback) {
	const resultDetails = {result: true};

	if (this[name] === null || this[name] === undefined) {
		resultDetails.result = false;
	} else if(this[name] instanceof Array) {
		resultDetails.result = this[name].length > 0;
	} else if(typeof (this[name]) === "function") {
		resultDetails.result = true;
	} else {
		resultDetails.result = true;
	}

	if(resultDetails.result === false) {
		resultDetails.message = "cannot be empty";
	}

	if(callback) {
		callback(undefined, resultDetails);
	} else {
		return resultDetails;
	}
}

export function isAssigned(name, callback) {
	const resultDetails = {result: check.assigned(this[name])};

	if(resultDetails.result === false) {
		resultDetails.message = "must be assigned";
	}

	if(callback) {
		callback(undefined, resultDetails);
	} else {
		return resultDetails;
	}
}

export function isNumber(name, callback) {
	const resultDetails = {result: check.assigned(this[name])};

	if(resultDetails.result) {
		resultDetails.result = check.number(this[name]);
		if(!resultDetails.result) {
			let n = parseInt(this[name]);
			if(isNaN(n)) {
				resultDetails.result = false;
			} else {
				resultDetails.result = true;
			}
		}
	}

	if(resultDetails.result === false) {
		resultDetails.message = "must be a number";
	}

	if(callback) {
		callback(undefined, resultDetails);
	} else {
		return resultDetails;
	}
}

export function isClass(value) {
  const result = typeof value === "function" && (/^\s*class\s+/.test(value.toString()) || /_class\S+/i.test(value.toString()));
	return {
		result: result
	};
}
