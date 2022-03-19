//7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string
function getVowels(str) {
  var m = str.match(/[aeiou]/gi);
  return m === null ? 0 : m.length;
}
console.log(getVowels("Hi,How are you brother"));
