"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fizzBuzz;
/* fizzBuzz.js
Реализуйте и экспортируйте по умолчанию функцию, которая выводит (console.log) в терминал числа в диапазоне от begin до end. При этом:

Если число делится без остатка на 3, то вместо него выводится слово Fizz
Если число делится без остатка на 5, то вместо него выводится слово Buzz
Если число делится без остатка и на 3, и на 5, то вместо числа выводится слово FizzBuzz
В остальных случаях выводится само число
Функция принимает два параметра (begin и end), определяющих начало и конец диапазона (включительно). Для простоты считаем, что эти параметры являются целыми числами больше нуля. Если диапазон пуст (в случае, когда begin > end), то функция просто ничего не печатает.

Пример
Вызов функции:

fizzBuzz(11, 20);
Вывод в терминале:

11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz */

function fizzBuzz(a, b) {
  var tmp = '';
  for (var i = a; i <= b; i++) {
    if (i % 3 === 0 && i % 5 != 0) {
      tmp = "Fizz";
      console.log(tmp);
    } else if (i % 3 != 0 && i % 5 === 0) {
      tmp = "Buzz";
      console.log(tmp);
    } else if (i % 3 === 0 && i % 5 === 0) {
      tmp = "FizzBuzz";
      console.log(tmp);
    } else console.log(i);
  }
}

console.log(fizzBuzz(0, 100));