/*

  Jake Alsemgeest
  October 30th, 2016

  CCI 5th edition

  Given two strings, write a method to decide if one is a permutation of the other.

*/

let str1 = 'funny';
let str2 = 'fun';
let str3 = 'cool';
let str4 = 'bunny';

// O(n)
const isPermutation = (str1, str2) => {
  if (str1 === str2) return true;
  if (str1.length === str2.length) return false;
  const larger = str1.length > str2.length ? str1 : str2;
  const smaller = str1.length < str2.length ? str1 : str2;
  let needle = -1;
  for (let i = 0; i < larger.length; i++) {
    if (smaller[++needle] === larger[i]) {
      if (needle + 1 === smaller.length) return true;
    } else {
      needle = -1;
    }
  }
  return false;
};

console.log(isPermutation(str1, str2));
console.log(isPermutation(str1, str3));
console.log(isPermutation(str1, str4));
