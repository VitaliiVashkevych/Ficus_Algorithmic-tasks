// // Given an array of strings words and a specified width lineWidth, format the text so that each line has exactly lineWidth characters and is fully justified (both left and right). You should arrange the words in a greedy manner, fitting as many words as possible into each line. Add extra spaces when necessary to ensure each line is exactly lineWidth characters. The extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line cannot be evenly divided between words, assign more spaces to the slots on the left than on the right. For the last line of text, it should be left-justified, and no extra space should be added between words.

// // Note: A word is defined as a sequence of non-space characters. Each word's length is guaranteed to be greater than 0 and not exceed lineWidth. The input array words contains at least one word.

// // Example 1:

// // Input:

// // words = ["This", "is", "an", "example", "of", "text", "justification."]
// // lineWidth = 16

// // Output:

// // [
// //   "This    is    an",
// //   "example  of text",
// //   "justification.  "
// // ]

// // Example 2:

// // Input:

// // words = ["What","must","be","acknowledgment","shall","be"]
// // lineWidth = 16

// // Output:

// // [
// //   "What   must   be",
// //   "acknowledgment  ",
// //   "shall be        "
// // ]

// // Explanation: Note that the last line is "shall be    " instead of "shall     be", because the last line must be left-justified instead of fully-justified. Note that the second line is also left-justified because it contains only one word.

// // Example 3:

// // Input:

// // words=["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"]
// // lineWidth = 20

// // Output:

// // [
// //   "Science  is  what we",
// //   "understand      well",
// //   "enough to explain to",
// //   "a  computer.  Art is",
// //   "everything  else  we",
// //   "do                  "
// // ]

// // Constraints:

// // 1 <= words.length <= 300

// // 1 <= words[i].length <= 20

// // words[i] consists of only English letters and symbols.

// // 1 <= lineWidth <= 100

// // words[i].length <= lineWidth

function justificationText(words, lineWidth) {
  const result = [];
  let currentStr = "";

  for (let i = 0; i < words.length; i++) {
    if (
      currentStr.length < lineWidth &&
      (currentStr + words[i]).length <= lineWidth
    ) {
      currentStr += words[i] + " ";
    }

    if (
      (currentStr + words[i + 1]).length >= lineWidth + 1 ||
      i === words.length - 1
    ) {
      const spacesNeed = lineWidth - currentStr.length + 1;
      let spacesCount = 0;

      const indexOfSpaces = [];
      const arrForReplace = [];

      currentStr = currentStr.slice(0, -1);

      for (let i = 0; i < currentStr.length; i++) {
        if (currentStr[i] === " ") {
          spacesCount++;
          indexOfSpaces.push(i);
        }
      }

      let spacesTotal = spacesCount + spacesNeed;
      const evenSpaces = Math.ceil(spacesTotal / spacesCount);

      for (let i = 0; i < indexOfSpaces.length; i++) {
        if (evenSpaces <= spacesTotal) {
          arrForReplace.push(" ".repeat(evenSpaces));
          spacesTotal = spacesTotal - evenSpaces;
        } else {
          arrForReplace.push(" ".repeat(spacesTotal));
        }
      }

      for (let i = indexOfSpaces.length - 1; i >= 0; i--) {
        const index = indexOfSpaces[i];
        currentStr =
          currentStr.substring(0, index) +
          arrForReplace[i] +
          currentStr.substring(index + 1);
      }

      result.push(currentStr);
      currentStr = "";
    }
  }

  if (result[result.length - 1].length !== lineWidth) {
    while (result[result.length - 1].length < lineWidth) {
      result[result.length - 1] += " ";
    }
  }

  return result;
}

const test1 = ["This", "is", "an", "example", "of", "text", "justification."];
const test2 = ["What", "must", "be", "acknowledgment", "shall", "be"];
const test3 = [
  "Science",
  "is",
  "what",
  "we",
  "understand",
  "well",
  "enough",
  "to",
  "explain",
  "to",
  "a",
  "computer.",
  "Art",
  "is",
  "everything",
  "else",
  "we",
  "do",
];

console.log(justificationText(test1, 16));
console.log(justificationText(test2, 16));
console.log(justificationText(test3, 20));
