"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEqual = exports.lessThan = exports.greaterThan = undefined;

var _strings = require("./strings");

var bigLettersCount = function bigLettersCount(str) {
  // BEGIN (write your solution here)
  var upper = 0;
  var lenstr = (0, _strings.length)(str);
  for (var i = 0; i < lenstr; i++) {
    if ((0, _strings.toUpperCase)(str[i]) === str[i] || str[i] === /[//s]/g) {
      upper++;
    }
  }
  return upper;
};

// END

/* eslint-disable no-console */
var compare = function compare(first, second) {
  var firstCount = bigLettersCount(first);
  var secondCount = bigLettersCount(second);

  // BEGIN (write your solution here)
  if (firstCount > secondCount) {
    return 1;
  }
  if (firstCount < secondCount) {
    return -1;
  }
  return 0;
  // END
};

var greaterThan = exports.greaterThan = function greaterThan(first, second) {
  return compare(first, second) === 1;
};

var lessThan = exports.lessThan = function lessThan(first, second) {
  return compare(first, second) === -1;
};

var isEqual = exports.isEqual = function isEqual(first, second) {
  return compare(first, second) === 0;
};

console.log(bigLettersCount("ad Sd"));
console.log(bigLettersCount("ad sd"));
console.log(bigLettersCount(" ad"));
console.log(bigLettersCount("QWER"));
console.log(bigLettersCount("dfwe r D"));