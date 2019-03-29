'use strict';

var _strings = require('./strings');

// eslint-disable-line

// BEGIN (write your solution here)

function addDigits(num) {
    var sum = getSumNumber(num);
    while (sum >= 10) {
        sum = getSumNumber(sum);
    }
    return sum;
}

function getSumNumber(num) {
    var sum = 0,
        tmp;

    while (num) {
        tmp = num % 10;
        num = (num - tmp) / 10;
        sum += tmp;
    }
    return sum;
}

// ENDs

// console.log(addDigits(55));
console.log(getSumNumber(555));

console.log(addDigits(598997686567));
/* console.log(ans); */