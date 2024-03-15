// Simon's favourite letters are vowels. He would love to be able to count how many vowels are in a word or sentence quickly
// That's where we need your help!
// Write a function to count the vowels in a given word or sentence and return the number.
// The input won't always be a string so you will need to consider this in the function
// - Vowels: a, e, i, o, u
// - Return the number of vowels as an integer
// - If the input is a number or empty string return "invalid input"

export default function countVowels(word) {
  if (typeof word === "number" || word === " ") {
    return "invalid input";
  }

  let vowelNum = 0;
  for (let i = 0; i < word.length; i++) {
    if (
      word[i] === "a" ||
      word[i] === "e" ||
      word[i] === "i" ||
      word[i] === "o" ||
      word[i] === "u"
    ) {
      vowelNum++;
    }
  }
  return vowelNum;
}
