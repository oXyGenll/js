"use strict";

/* eslint-disable no-console */
/* Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход строку, состоящую только из открывающих и закрывающих круглых скобок, и проверяет является ли эта строка корректной. Пустая строка (отсутствие скобок) считается корректной.

Строка считается корректной (сбалансированной), если содержащаяся в ней скобочная структура соответствует требованиям:

Скобки — это парные структуры. У каждой открывающей скобки должна быть соответствующая ей закрывающая скобка.
Закрывающая скобка не должна идти впереди открывающей.
import areBracketsBalanced from 'roundBracketsValidator';

areBracketsBalanced('(())');  // true
areBracketsBalanced('((())'); // false*/

var areBracketsBalanced = function areBracketsBalanced(str) {
  var openBrackets = str.split("(").length - 1;
  var closeBrackets = str.split(")").length - 1;

  if (openBrackets != closeBrackets) return false;

  var tmpStr1 = "";
  var tmpStr2 = "";

  while (str.indexOf("(") < str.indexOf(")")) {
    tmpStr1 = str.replace(/\(/, "");
    tmpStr2 = tmpStr1.replace(/\)/, "");
    str = tmpStr2;
  }
  if (str.length === 0) return true;
  else return false;
};

console.log(areBracketsBalanced(""));
console.log(areBracketsBalanced("((()))"));
console.log(areBracketsBalanced("(()))"));
console.log(areBracketsBalanced(")((())"));
console.log(areBracketsBalanced("(()))("));
