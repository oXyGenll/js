"use strict";

var isHappyTicket = function isHappyTicket(names) {
  var name = String(names);
  var firstHalf = 0;
  var secondHalf = 0;

  for (var i = 0; i <= 2; i++) {
    firstHalf = firstHalf + Number(name[i]);
    //console.log(name[i]);
  }

  for (var j = 3; j <= 5; j++) {
    secondHalf = secondHalf + Number(name[j]);
  }
  console.log(secondHalf);
  //console.log(firstHalf);
  //console.log(secondHalf);

  if (firstHalf != secondHalf) return false;else return true;
};

console.log(isHappyTicket("060006"));
console.log(isHappyTicket(123322));