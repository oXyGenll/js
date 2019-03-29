/* eslint-disable no-console */
/* isPalindrome.js
Реализуйте и экспортируйте по умолчанию функцию isPalindrome с использованием рекурсии.

Примеры использования:
import isPalindrome from './isPalindrome';

isPalindrome('radar'); // => true
isPalindrome('a');     // => true
isPalindrome('abs');   // => false
Один из способ реализовать эту функцию — попарно сравнить буквы, стоящие зеркально относительно центра. Если они совпадают, то перед нами палиндром.

Алгоритм
Если строка короче двух символов, то считается, что это палиндром.
Проверяем, совпадают ли первый и последний символы. Если нет, то это не палиндром. Если совпадают, то вызываем функцию рекурсивно, передавая внутрь строку минус первый и последний символ.
Разбор на примере: radar (палиндром)

Первый и последний символ r. Так как символы совпали, вызываем isPalindrome рекурсивно. Дальше передаем ada
Первый и последний символ a. Так как символы совпали, вызываем isPalindrome рекурсивно. Дальше передаем d
Так как длина строки d меньше двух символов, возвращаем true
Разбор на примере: rador (не палиндром)

Первый и последний символ r. Так как символы совпали, вызываем isPalindrome рекурсивно. Дальше передаем ado
Первый символ a и последний символ o. Так как символы не совпали, возвращаем false
Подсказки
Чтобы узнать длину строки, используйте свойство length:

'hello'.length; // 5
Чтобы получить подстроку из строки, используйте метод substring:

'hello'.substring(0, 4); // "hell"
'hello'.substring(1, 3); // "el" */

const isPalindrome = str => {
  let len = str.length - 1;
  if (str.length < 2) return true;
  for (let i = 0; i < len; i++) {
    if (str[i] === str[len - i]) {
      return isPalindrome(str.substring(i + 1, len - i));
    } else return false;
  }
};

export default isPalindrome;


console.log(isPalindrome("aibohphobia"));
console.log(isPalindrome("aibohfgphobia"));
