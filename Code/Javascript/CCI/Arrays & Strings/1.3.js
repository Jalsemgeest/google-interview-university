/*

  Jake Alsemgeest
  October 30th, 2016

  CCI 5th edition

  Given two strings, write a method to decide if one is a permutation of the other.

*/

let str1 = 'funny';
let str2 = 'fun';
let str3 = 'cool';

const isPermutation = (str1, str2) => {
  if (str1 === str2) return true;
  let needle = -1;
  // Check for str1 in str2
  if (str1.length < str2.length) {
    for (let i = 0; i < str2.length; i++) {
      if (str1[++needle] === str2[i]) {
        if (needle + 1 === str1.length) return true;
      } else {
        needle = -1;
      }
    }
  }
  needle = -1;
  // Check for str2 in str1
  if (str2.length < str1.length) {
    for (let i = 0; i < str1.length; i++) {
      if (str2[++needle] === str1[i]) {
        if (needle + 1 === str2.length) return true;
      } else {
        needle = -1;
      }
    }
  }
  return false;
};

console.log(isPermutation(str1, str2));
console.log(isPermutation(str1, str3));
