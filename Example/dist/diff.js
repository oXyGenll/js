"use strict";

// Напишите функцию diff, которая принимает два угла (integer), каждый от 0 до 360, и возвращает наименьшую разницу между ними.

/* diff(0, 45) === 45;         // не 315, а 45, потому что 45 меньше
diff(0, 180) === 180;
diff(0, 190) === 170;       // не 190, а 170, потому что 170 меньше
diff(120, 280) === 160; */

function diff(smallAngle, bigAngle) {

    var diff;

    if (Math.abs(bigAngle - smallAngle) > 180) {
        diff = 360 - Math.abs(bigAngle - smallAngle);
    } else if (Math.abs(bigAngle - smallAngle) < 180) {
        diff = Math.abs(bigAngle - smallAngle);
    } else {
        diff = 180;
    }

    return diff;
}

console.log(diff(0, 45));
console.log(diff(225, 0));
console.log(diff(0, 190));
console.log(diff(120, 280));
console.log(diff(0, 180));
console.log(diff(120, 310));