# Create a Codewars Kata

Idea 💡:

- Create a kata to count how many the vowels in a string
- If the input is not a string return 'No vowels"

- MVP:

  - Always a string value
  - Returns the number of vowels

  - Stretch Goal 🏅 :
    - needs to be lower case
    - Different type of input eg number
    - Returns "invalid input" if input is a number or empty string

- KATA INSTRUCTIONS 📝:
  Simon's favourite letters are vowels. He would love to be able to count how many vowels are in a word or sentence quickly, that's where we need your help! It may be helpful to note Simon finds it easier when all of the characters are lower case!

  Write a function to count the vowels in a given word or sentence and return the number. The input won't always be a string so you will need to consider this in the function

  - Vowels: a, e, i, o, u
  - Input needs to be lower case
  - Return the number of vowels as an integer
  - If the input is a number or empty string return "invalid input"

| Test Case | Input               | Expected Outcome        |
| --------- | ------------------- | ----------------------- |
| TC1       | Single word string  | No of vowels as integer |
| TC2       | Multiple wor string | No of vowels as integer |
| TC3       | number              | "invalid input"         |
| TC4       | empty string        | "invalid input"         |
| TC5       | capitalised word    | No of vowels as integer |

# Steps:

- Download Vitest ✅
- Write a barebones test (should pass) ✅
- Write a test to test the word "Apple" ✅
- Write a test to test the word "Orange" ✅
- Write a test to test the word "Orange red" ✅
- Write a test to test the string "Adams family" ✅
- Write a test to test the string "Emily ate an apple" ✅
- Write a test to test a number ✅
- Write a test to test an empty string ✅
- Write a test to test a capitalised word ✅

# Reflections 💭

- Took a TDD approach and completed testing first which was a bit of a different mindset
- Enjoyed the process of slowly adding code to the function to pass the tests and then eventually adding a generic code block to pass all tests
- I think the kata could have been a bit more complex but I wanted do something that I thought would be realistic in the time
