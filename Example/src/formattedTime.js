/*formattedTime.js
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход количество минут (прошедших с начала суток) и возвращает строку, являющуюся временем в формате чч:мм.

Пример:

formattedTime(5); // 00:05
formattedTime(15); // 00:15
formattedTime(60); // 01:00
formattedTime(67); // 01:07
formattedTime(175); // 02:55
formattedTime(600); // 10:00
formattedTime(754); // 12:34
Подсказки
Используйте функцию Math.floor(number) для округления до нижней границы*/

const formattedTime = min => {
  let hour = Math.floor(min / 60);
  let ostmin = min - hour * 60;

  if (hour < 10) {
    hour = "0" + hour;
  } else hour;

  if (ostmin < 10) {
    ostmin = "0" + ostmin;
  }

  return hour + ":" + ostmin;
};

console.log(formattedTime(60));
