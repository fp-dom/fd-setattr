"use strict";

var curry3 = require("fj-curry").curry3;


var _setAttr = function (name, value, elem) {
  return elem.setAttribute(name, value);
};

module.exports = curry3(_setAttr);