/*ДНК и РНК это последовательности нуклеотидов.

Четыре нуклеотида в ДНК это аденин (A), цитозин (C), гуанин (G) и тимин (T).

Четыре нуклеотида в РНК это аденин (A), цитозин (C), гуанин (G) и урацил (U).

Цепь РНК составляется на основе цепи ДНК последовательной заменой каждого нуклеотида:

G -> C
C -> G
T -> A
A -> U
dnaToRna.js
Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход цепь ДНК и возвращает соответствующую цепь РНК (совершает транскрипцию РНК).

Если во входном параметре нет ни одного нуклеотида (т.е. передана пустая строка), то функция должна вернуть пустую строку. Если в переданной цепи ДНК встретится "незнакомый" нуклеотид (не являющийся одним из четырех перечисленных выше), то функция должна вернуть null.

dnaToRna('ACGTGGTCTTAA'); // 'UGCACCAGAAUU'
dnaToRna('CCGTA'); // 'GGCAU'
dnaToRna(''); // ''
dnaToRna('ACNTG'); // null
Подсказки
Длина строки str находится так: str.length*/

const dnaToRna = string => {
  //let arr = string.split("");
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (
      string[i] != "G" &&
      string[i] != "C" &&
      string[i] != "T" &&
      string[i] != "A"
    ) {
      return null;
    } else if (string.length === 0) {
      return "";
    } else if (string[i] == "G") {
      string[i] = string.replace("G", "C");
    } else if (string[i] == "C") {
      string[i] = string.replace("C", "G");
    } else if (string[i] == "T") {
      string[i] = string.replace("T", "A");
    } else if (string[i] == "A") {
      string[i] = string.replace("A", "U");
    }
    result = result + string[i];
  }
  return result;
};

console.log(dnaToRna("ACGTGGTCTTAA"));
