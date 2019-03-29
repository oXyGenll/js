/* solution.js
Реализуйте и экспортируйте по умолчанию функцию reverseInt, которая переворачивает цифры в переданном числе и возвращает новое число.

reverseInt(13); // 31
reverseInt(-123); // -321
reverseInt(8900); // 98 */

export default function solution(num){
  var x = 0;
  while (Math.abs(num) > 0) {
    x = x*10 + num%10;
    num = ~~(num / 10);
  }
  return x
}

console.log(solution(12));
console.log(solution(-122));
console.log(solution(8900));