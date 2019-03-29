/* sumSquareDifference.js
Сумма квадратов первых десяти натуральных чисел это 12 + 22 + 32 + ... + 10 2 = 385.

Квадрат суммы первых десяти натуральных чисел это (1 + 2 + 3 + ... + 10)2 = 552 = 3025.

Разница между квадратом суммы и суммой квадратов первых десяти натуральных чисел: 3025 − 385 = 2640.

Напишите функцию sumSquareDifference, которая принимает аргумент n и возвращает разницу между квадратом суммы и суммой квадратов первых n натуральных чисел. */

function sumSquareDifference(n) {
  return sumSquare(n) - squareSum(n);
}

function sumSquare(n) {

  var square = 0;
  for (var i = 0; i <= n; i++) {
    let tmp = i*i;
    square = tmp + square;
  }
  return square;

}

function squareSum(n) {
  
  var square = 0;
  for (var i = 0; i <= n; i++) {
    var tmp = i;
    square = tmp + square;
  }
  return square*square;

}

console.log(sumSquare(10));
console.log(squareSum(10));

console.log(sumSquareDifference(1));
console.log(sumSquareDifference(5));
console.log(sumSquareDifference(10));
console.log(sumSquareDifference(42));