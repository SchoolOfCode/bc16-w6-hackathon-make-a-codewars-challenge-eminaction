// Simon's favourite letters are vowels. He would love to be able to count how many vowels are in a word or sentence quickly
// That's where we need your help!
// It may be helpful to note Simon finds it easier when all of the characters are lower case!

// Write a function to count the vowels in a given word or sentence and return the number of vowels.
// The input won't always be a string so you will need to consider this in the function.

// - If the input is a number or empty string return "invalid input"
// - Vowels: a, e, i, o, u
// - Input needs to be lower case
// - Return the number of vowels as an integer

export default function countVowels(word) {
  if (typeof word === "number" || word === " ") {
    return "invalid input";
  }
  let lowerWord = word.toLowerCase();

  let vowelNum = 0;
  for (let i = 0; i < lowerWord.length; i++) {
    if (
      lowerWord[i] === "a" ||
      lowerWord[i] === "e" ||
      lowerWord[i] === "i" ||
      lowerWord[i] === "o" ||
      lowerWord[i] === "u"
    ) {
      vowelNum++;
    }
  }
  return vowelNum;
}
