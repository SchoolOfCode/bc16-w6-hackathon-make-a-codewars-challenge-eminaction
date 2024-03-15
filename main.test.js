import { test, expect } from "vitest"; //import the test and expect function from vitest
import countVowels from "./main.js"; //import the function

//test to see if the vowels is 2 in apple
test("Count vowels in Apple, answer should be 2", function () {
  expect(countVowels("apple")).toBe(2);
});

//test to see if the vowels is 3 in orange
test("Count vowels in Orange, answer should be 3", function () {
  expect(countVowels("orange")).toBe(3);
});

//test to see if the vowels is 4 in orange red
test("Count vowels in Orange red, answer should be 4", function () {
  expect(countVowels("orange red")).toBe(4);
});

//test to see if the vowels is 4 in adams family
test("Count vowels in Adams family, answer should be 4", function () {
  expect(countVowels("adams family")).toBe(4);
});

//test to see if the vowels is 7 in emily ate an apple
test("Count vowels in emily ate an apple, answer should be 7", function () {
  expect(countVowels("emily ate an apple")).toBe(7);
});

//test to see if vowels is 8 in onomatopoeia
test("Count vowels in onomatopoeia, answer should be 8", function () {
  expect(countVowels("onomatopoeia")).toBe(8);
});

//test to see if vowels is 3 in elephant
test("Count vowels in elephant, answer should be 8", function () {
  expect(countVowels("elephant")).toBe(3);
});

//test to see if a number returns "invalid input"
test("Input number, answer should be invalid input", function () {
  expect(countVowels(10)).toBe("invalid input");
});

//test to see if a number returns "invalid input"
test("Input number, answer should be invalid input", function () {
  expect(countVowels(3000)).toBe("invalid input");
});

//test to see if a number returns "invalid input"
test("Input empty string, answer should be invalid input", function () {
  expect(countVowels(" ")).toBe("invalid input");
});
