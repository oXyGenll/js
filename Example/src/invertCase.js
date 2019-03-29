/* invertCase.js
Реализуйте и экспортируйте по умолчанию функцию invertCase, которая меняет в строке регистр каждой буквы на противоположный.

invertCase('Hello, World!'); // hELLO, wORLD!
invertCase('I loVe JS');     // i LOvE js
Подсказки
Чтобы узнать длину строки, используйте свойство length:

'welcome'.length; // 7
Чтобы получить строку (или отдельный символ) в верхнем регистре, используйте метод toUpperCase:

'foo'.toUpperCase(); // 'FOO';
'f'.toUpperCase();   // 'F';
Чтобы получить строку (или отдельный символ) в нижнем регистре, используйте метод toLowerCase:

'BAR'.toLowerCase(); // 'bar';
'b'.toLowerCase();   // 'b'; */

const invertCase = (str) => {
    let tmp = '';
  for(let i = 0; i < str.length; i++){
    if(str[i].toUpperCase() === str[i]){
      tmp = tmp + str[i].toLowerCase();
    } else { tmp = tmp + str[i].toUpperCase();}
  } return tmp;

}

export default invertCase;

console.log(invertCase('Hello, World!'));
console.log(invertCase('I loVe JS'));