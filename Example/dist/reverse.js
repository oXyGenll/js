"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reverse;
/* eslint-disable no-console */
/*reverse.js
Реализуйте функцию reverse, переворачивающую строку. В этот раз, используя итеративный процесс. Работа функции основана на двух принципах:

Любой символ строки можно получить обратившись к нему по индексу, например: str[3].
Индекс последнего символа строки на единицу меньше длины строки и вычисляется так: str.length - 1.

const str = 'qwerty';
str[1]; // => w
str[4]; // => t
const lastIndex = str.length - 1; // 5
str[lastIndex]; // => y
Алгоритм
Ваша задача — реализовать внутреннюю рекурсивную функцию iter, которая первым параметром принимает индекс текущего символа, а вторым — текущее значение аккумулятора. Начальный вызов инициализируется значениями 0 для индекса и '' для аккумулятора. Алгоритм работы функции следующий:

Если текущий индекс выходит за границы строки (его значение превышает значение последнего индекса строки), то поиск закончился и, значит, нужно возвратить аккумулятор, содержащий перевёрнутую строку.
В остальных случаях рекурсивно вызывается iter с увеличением индекса на единицу и интерполяцией, внутри которой к содержимому аккумулятора добавляется символ, взятый по текущему индексу.*/

function reverse(str) {
  var lastIndex = str.length - 1;

  var iter = function iter(index, acc) {
    if (index > lastIndex) {
      return acc;
    }
    return iter(index + 1, "" + str[index] + acc);
  };

  return iter(0, "");
}

console.log(reverse(""));
console.log(reverse("z"));
console.log(reverse("zz"));
console.log(reverse("zza"));
console.log(reverse("qwerty"));