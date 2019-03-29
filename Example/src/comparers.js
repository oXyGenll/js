/* eslint-disable no-console */
import { length, toUpperCase } from "./strings";

const bigLettersCount = str => {
  // BEGIN (write your solution here)
  let upper = 0;
  const lenstr = length(str);
  for (let i = 0; i < lenstr; i++) {
    if (toUpperCase(str[i]) === str[i] || str[i] === /[//s]/g) {
      upper++;
    }
  }
  return upper;
};

// END

const compare = (first, second) => {
  const firstCount = bigLettersCount(first);
  const secondCount = bigLettersCount(second);

  // BEGIN (write your solution here)
  if (firstCount > secondCount) {
    return 1;
  }
  if (firstCount < secondCount) {
    return -1;
  }
  return 0;
  // END
};

export const greaterThan = (first, second) => compare(first, second) === 1;

export const lessThan = (first, second) => compare(first, second) === -1;

export const isEqual = (first, second) => compare(first, second) === 0;

console.log(bigLettersCount("ad Sd"));
console.log(bigLettersCount("ad sd"));
console.log(bigLettersCount(" ad"));
console.log(bigLettersCount("QWER"));
console.log(bigLettersCount("dfwe r D"));
