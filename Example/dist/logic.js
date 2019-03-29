"use strict";

var If = function If(f) {
  return function (a) {
    return function (b) {
      return f(a)(b);
    };
  };
};

var True = function True(a) {
  return function () {
    return a;
  };
};
var False = function False() {
  return function (b) {
    return b;
  };
};

var ConditionFunction = If(True);
console.log(ConditionFunction("one")("two")); // one

var ConditionFunction1 = If(False);
console.log(ConditionFunction1("one")("two")); // one