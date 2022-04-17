/*
  Reverse the provided string.
  Your result must be a string.
*/

function reverseString(str) {
    // return str.split('').reverse().join('')
    return [...str].reverse().join('')
}

console.log(reverseString('hello'))
