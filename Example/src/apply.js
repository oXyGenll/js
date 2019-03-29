/*apply.js
Реализуйте и экспортируйте по умолчанию функцию apply, которая принимает на вход три параметра:
Количество раз, которое нужно применить функцию к аргументу (ряд последовательных вызовов, где каждому следующему вызову передается аргумент, являющийся результатом предыдущего вызова функции; см. примеры ниже)
Функцию для применения
Аргумент для применения

apply(0, Math.sqrt, 4); // => 4
apply(1, Math.sqrt, 4); // => 2
// Math.sqrt(Math.sqrt(16));
apply(2, Math.sqrt, 16); // => 2
// Math.sqrt(Math.sqrt(Math.sqrt(256)));
apply(3, Math.sqrt, 256); // => 2
apply(1, v => v ** 2, 3); // => 9
apply(5, v => v + 10, 3); // => 53*/

const apply = (arr1, func, arr2) => {
  let tmp = arr2;
  let tmp1;
  if (arr1 == 0) return arr2;
  for (let i = 0; i < arr1; i++) {
    tmp1 = func(tmp);
    tmp = tmp1;
  }
  return tmp1;
};

console.log(apply(0, Math.sqrt, 4));
console.log(apply(1, Math.sqrt, 4));
console.log(apply(2, Math.sqrt, 16));
