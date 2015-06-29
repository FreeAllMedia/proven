/**
 * To create a new validator:
 * 1. export a function with one parameter to accept the value being validated.
 * 2. make sure the function returns true or false based upon its validation.
 */

"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.isNotEmpty = isNotEmpty;
exports.isAssigned = isAssigned;
exports.isNumber = isNumber;
var check = require("check-types");

function isNotEmpty(name, callback) {
	var resultDetails = { result: true };

	if (this[name] === null || this[name] === undefined) {
		resultDetails.result = false;
	} else if (this[name] instanceof Array) {
		resultDetails.result = this[name].length > 0;
	} else if (typeof this[name] === "function") {
		resultDetails.result = true;
	} else {
		resultDetails.result = true;
	}

	if (resultDetails.result === false) {
		resultDetails.message = "cannot be empty";
	}

	if (callback) {
		callback(undefined, resultDetails);
	} else {
		return resultDetails;
	}
}

function isAssigned(name, callback) {
	var resultDetails = { result: check.assigned(this[name]) };

	if (resultDetails.result === false) {
		resultDetails.message = "must be assigned";
	}

	if (callback) {
		callback(undefined, resultDetails);
	} else {
		return resultDetails;
	}
}

function isNumber(name, callback) {
	var resultDetails = { result: check.assigned(this[name]) };

	if (resultDetails.result) {
		resultDetails.result = check.number(this[name]);
		if (!resultDetails.result) {
			var n = parseInt(this[name]);
			if (isNaN(n)) {
				resultDetails.result = false;
			} else {
				resultDetails.result = true;
			}
		}
	}

	if (resultDetails.result === false) {
		resultDetails.message = "must be a number";
	}

	if (callback) {
		callback(undefined, resultDetails);
	} else {
		return resultDetails;
	}
}