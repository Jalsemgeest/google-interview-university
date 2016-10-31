/*

  Jake Alsemgeest
  October 30th, 2016

  CCI 5th edition

  Implement an algorithm to determine if a string has all unique characters. What
  if you cannot use additional data structures?

*/

let str1 = 'not unique';
let str2 = 'abcdefg';

// O(n)
const withoutStructure = (str) => {
  if (str.length > 26) return false;
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) !== i) {
      return false;
    }
  }
  return true;
};

console.log(withoutStructure(str1));
console.log(withoutStructure(str2));
