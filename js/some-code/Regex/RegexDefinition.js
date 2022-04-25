/*
/\W/ Matches any non-word character. This includes spaces and punctuation, but not underscores.
It’s equivalent to /[^A-Za-z0-9_]/
*/

function splitify(str) {
  // Add your code below this line
  return str.split(/\W/);
  // Add your code above this line
}
splitify("Hello World,I-am code");