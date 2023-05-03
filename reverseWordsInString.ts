/* Write a function that takes in a string of words separated by one
or more whitespaces and returns a string that has these words in reverse
order. For example, given the string "tim is great", your function should
return "great is tim".
The words in the string will be separated by one or more whitespaces,
and the reversed string must contain the same whitespaces as the original
string. For example, given the string "whitespaces    4" your would be
expected to return "4    whitespaces"
Note that you're not allowed to use any built-in split or reverse methods.
However, you are allowed to use a built-in join method/function.*/
//minha solução
export function reverseWordsInString(string: string) {
  if (string === " ") {
    return " ";
  }
  let words: string[] = [];
  let left;
  let right = string.length;
  for (let i = string.length - 1; i >= 0; i--) {
    if (string[i] === " ") {
      left = i;
      let word = string.substring(left + 1, right + 1);
      words.push(word);
      word = "";
      right = i - 1;
    } else if (i === 0) {
      left = i;
      let word = string.substring(left, right + 1);
      words.push(`${word}`);
    }
  }
  return words.join(" ");
}
//solução 1 do algoexpert - ambas são O(n) time, O(n) space
export function reverseWordsInString1(string: string) {
  let words: string[] = [];
  let startOfWord = 0;
  for (let i = 0; i < string.length; i++) {
    const character = string[i];
    if (character === " ") {
      words.push(string.slice(startOfWord, i));
      startOfWord = i;
    } else if (string[startOfWord] === " ") {
      words.push(" ");
      startOfWord = i;
    }
  }
  words.push(string.slice(startOfWord));
  reverseList(words);
  return words.join("");
}
function reverseList(list: string[]) {
  let start = 0,
    end = list.length - 1;
  while (start < end) {
    const temp = list[start];
    list[start] = list[end];
    list[end] = temp;
    start++;
    end--;
  }
}
//solução 2 do algoexpert
export function reverseWordsInString2(string: string) {
  let characters: string[] = [];
  for (const char of string) {
    characters.push(char);
  }
  reverseListRange(characters, 0, characters.length - 1);
  let startOfWord = 0;
  while (startOfWord < characters.length) {
    let endOfWord = startOfWord;
    while (endOfWord < characters.length && characters[endOfWord] != " ") {
      endOfWord++;
    }
    reverseListRange(characters, startOfWord, endOfWord - 1);
    startOfWord = endOfWord + 1;
  }
  return characters.join("");
}
function reverseListRange(list: string[], start: number, end: number) {
  while (start < end) {
    const temp = list[start];
    list[start] = list[end];
    list[end] = temp;
    start++;
    end--;
  }
}
