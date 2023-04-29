/* Write a function that, given a string, returns its longest palindromic substring.
A palindrome is defined as a string that's written the same way forward and
backward. Note that single-character strings are palindromes.
You can assume that there will be only one longest palindrome substring. */
//solução com O(n^3) time | O(n) space
export function longestPalindromicSubstring(string: string) {
  let longest = "";
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < string.length; j++) {
      const substring = string.slice(i, j + 1);
      if (substring.length > longest.length && isPalindrome(substring)) {
        longest = substring;
      }
    }
  }
  return longest;
}

function isPalindrome(string: string) {
  let leftIdx = 0;
  let rightIdx = string.length - 1;
  while (leftIdx < rightIdx) {
    if (string[leftIdx] !== string[rightIdx]) return false;
    leftIdx++;
    rightIdx--;
  }
  return true;
}
//solução com O(n^2) time | O(n) space
export function longestPalindromicSubstring2(string: string) {
  let currentLongest = [0, 1];
  for (let i = 0; i < string.length; i++) {
    const odd = getLongestPalindromeFrom(string, i - 1, i + 1);
    const even = getLongestPalindromeFrom(string, i - 1, i);
    const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
    currentLongest =
      currentLongest[1] - currentLongest[0] > longest[1] - longest[0]
        ? currentLongest
        : longest;
  }
  return string.slice(currentLongest[0], currentLongest[1]);
}

function getLongestPalindromeFrom(
  string: string,
  leftIdx: number,
  rightIdx: number
) {
  while (leftIdx >= 0 && rightIdx < string.length) {
    if (string[leftIdx] !== string[rightIdx]) break;
    leftIdx--;
    rightIdx++;
  }
  return [leftIdx + 1, rightIdx];
}
