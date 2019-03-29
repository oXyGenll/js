"use strict";

/* Создайте функцию isPerfect, которая принимает число и возвращает true, если оно совершенное, и false — в ином случае.

Совершенное число — это положительное целое число, равное сумме его положительных делителей (не считая само число). Например, 6 — идеальное число, потому что 6 = 1 + 2 + 3. */

function isPerfect(num) {

    var number = 0;
    for (var i = 1; i <= num; i++) {
        var tmp = num % i;
        if (tmp === 0 && num != num / i) {
            number = number + num / i;
        }
    }
    if (number === num && num != 0) {
        return true;
    } else return false;
}

console.log(isPerfect(6));
console.log(isPerfect(28));
console.log(isPerfect(496));
console.log(isPerfect(8128));

console.log(isPerfect(-6));
console.log(isPerfect(-28));
console.log(isPerfect(44));
console.log(isPerfect(0));