/*

  Jake Alsemgeest
  October 30th, 2016

  CCI 5th edition

  Implement a method to perform basic string compression using the counts
  of repeated characters. For example, the string aabcccccaaa would become
  a2blc5a3. If the "compressed" string would not become smaller than the original
  string, your method should return the original string.

*/

let str1 = 'aabcccccaaa';
let str2 = 'cool string with spaces';

const compressString = (str) => {
  if (str.length === 0) return '';
  let newStr = '';
  let pastChar = str[0];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (pastChar !== str[i]) {
      newStr += pastChar + count;
      count = 0;
    }
    pastChar = str[i];
    count++;
  }

  if (newStr.length > str.length) return str;

  return newStr;
};

const decompressString = (str) => {
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    if ((i+1) % 2 === 0) {
      let num = parseInt(str[i], 10);
      for (let z = 0; z < num; z++) {
        newStr += str[i - 1];
      }
    }
  }

  return newStr;
};

console.log(compressString(str1));
console.log(decompressString(compressString(str1)));
console.log(compressString(str2));
console.log(decompressString(compressString(str2)));
