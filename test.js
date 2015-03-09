"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var assert = _interopRequire(require("assert"));

var elem = _interopRequire(require("fd-elem"));

var setAttr = _interopRequire(require("./"));

var h1 = elem("h1", "Hello Test");

it("fd-setattr", function () {
  console.log(setAttr("display", "none"));
  setAttr("hidden", true)(h1);
  assert.equal(h1.hidden, true);
});