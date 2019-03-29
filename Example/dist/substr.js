"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable no-console */
/* В JS у строк есть метод substr. В этом задании мы его реализуем самостоятельно. Просьба не использовать этот метод внутри вашей реализации.

substr.js
Реализуйте и экспортируйте по умолчанию функцию substr, которая возвращает подстроку из переданной строки. Подстрокой называется любая выбранная часть строки. Например для строки hello можно выделить следующие подстроки: ello, llo, o, el и множество других. Функция принимает на вход три параметра:

Строка.
Начальный индекс. Значение по умолчанию: 0.
Длина подстроки. Значение по умолчанию: длина всей строки.
substr('abba', 0, 1);    // => a
substr('abba', 1, 2);    // => bb
substr('abba', -10, 2);  // => ab
substr('abba', -1, 100); // => abba
substr('abba', -1, -1);  // => a
substr('abba', 1, -10);  // => b
substr('abba', 1, 10);   // => bba
substr('abba', 1, 0);    // => ''
substr('abba', 100, 3);  // => ''
По умолчанию, то есть если не переданы дополнительные параметры, возвращается сама строка:

substr('');     // => ''
substr('abba'); // => abba
У этой функции множество вариантов поведения:

Если переданная длина отрицательная, то внутри она становится единицей
Если переданная длина равна нулю, то возвращается пустая строка
Если конечный индекс (переданная длина + начальный индекс - 1) выходит за границу строки, то берется подстрока от начального индекса до конца строки.

substr('abba', 1, 10);   // => bba
Конечный индекс 1 + 10. Он выходит за границу строки, так как длина строки 4 символа. Поэтому возвращается подстрока, от начального индекса 1 и до конца строки.

Если начальный индекс отрицательный, то внутри он становится нулем

Если начальный индекс выходит за границу слова справа, то всегда возвращается пустая строка

Для реализации этой функции, используйте подход, который называется "нормализация". Он заключается в том, что перед тем как делать вычисления, данные приводятся к виду, с которым удобно работать. Например, длина строки для substr может иметь следующие неудобные значения:

Отрицательное число
Число, выходящее за границу строки
Индекс + Длина выходят за границу строки
В каждой из этих ситуаций длину строки можно изменить на такое значение, которое будет удобно для обработки сразу всех возможных случаев. Если число отрицательное, то длина становится равной единице (из условия), если оно выходит за границу строки, то его нужно сделать равным длине строки. В последнем случае длина должна стать числом Длина Строки - Индекс. После этих манипуляций процесс взятия подстроки становится универсальным и не содержащим условия.

Подсказки
Длина строки str находится так: str.length

'cat'.length; // => 3 */

var substr = function substr(str) {
  var firstIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var lenSubstr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : str.length;

  if (firstIndex < 0) {
    firstIndex = 0;
  } else if (firstIndex > str.length) {
    return str = "";
  } else firstIndex;

  if (lenSubstr < 0) {
    lenSubstr = 1;
  } else if (lenSubstr === 0) {
    return str = "";
  } else if (lenSubstr + (firstIndex - 1) > str.length) {
    lenSubstr = str.length - firstIndex;
  } else if (lenSubstr > str.length) {
    lenSubstr = str.length;
  } else lenSubstr;

  var tmp = "";
  var i = 0;
  while (i !== lenSubstr) {
    tmp = tmp + str[i + firstIndex];
    i++;
  }
  if (tmp.length != lenSubstr) {
    return "";
  } else return tmp;
};

exports.default = substr;


console.log(substr("abba", -10, 2));
console.log(substr("abba", 4, -10));
console.log(substr("abba"));
console.log(substr("abba", 1, 0));
console.log(substr("abba", 0, 1));
console.log(substr("abba", 1, 2));
console.log(substr("abba", -1, 100));
console.log(substr("abba", -1, -1));
console.log(substr("abba", 1, -10));
console.log(substr("abba", 1, 10));
console.log(substr("abba", 0, 4));
console.log(substr("abba", 0, 5));