"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _libProvenJs = require("../lib/proven.js");

var _libProvenJs2 = _interopRequireDefault(_libProvenJs);

describe("Proven", function () {
	var component = undefined;

	before(function () {
		component = new _libProvenJs2["default"]();
	});

	it("should say something", function () {
		component.saySomething().should.equal("Something");
	});
});