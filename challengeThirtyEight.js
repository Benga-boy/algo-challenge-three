"use strict";
// You are given the string s. Your friend just asked you if it's possible to change the string from s to a string t by removing some characters from it. You're a pro at programming, so you decided to create a program to determine this.
// Example
// For s = "ceoydefthf5iyg5h5yts" and t = "codefights", the output should be convertString(s, t) = true.
// For s = "addbyca" and t = "abcd", the output should be convertString(s, t) = false.
function convertString(s, t) {
    let word = '';
    let tIndex = 0;
    // const sChars: string = s.split('')
    for (let i = 0; i < s.length; i++) {
        if (s[i] === t[tIndex]) {
            word = word.concat(s[i]);
            tIndex++;
            if (word === t) {
                return true;
            }
        }
    }
    return false;
}
console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights'));
console.log(convertString('addbyca', 'abcd'));
