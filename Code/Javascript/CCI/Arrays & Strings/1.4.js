/*

  Jake Alsemgeest
  October 30th, 2016

  CCI 5th edition

  Write a method to replace all spaces in a string with'%20'. You may assume that
  the string has sufficient space at the end of the string to hold the additional
  characters, and that you are given the "true" length of the string. (Note: if implementing
  in Java, please use a character array so that you can perform this operation
  in place.)
  EXAMPLE
  Input: "Mr John Smith
  Output: "Mr%20Dohn%20Smith"

*/

let str1 = 'this is a string with spaces';
let str2 = 'cool string with spaces';

const addPercent20 = (str) => {
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      newStr += '%20';
    } else {
      newStr += str[i];
    }
  }

  return newStr;
};

console.log(addPercent20(str1));
console.log(addPercent20(str2));
