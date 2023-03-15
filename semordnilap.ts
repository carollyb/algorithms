/* Write a function that takes in a list of unique strings and returns a list
of semordnilap pairs.
A semordnilap pair is defined as a set of different string where the reverse
of one word is the same as the forward version of the other.
For example the words "diaper" and "repaid" are a semordnilap pair, as the
words "palindromes" and "semordnilap".
The order of the returned pairs and the order of the strings within each
pair does not matter. */
export function semordnilap(words: string[]) {
  const wordsSet = new Set(words);
  const semordnilapPairs: [string, string][] = [];

  for (const word of words) {
    const reverse = word.split("").reverse().join("");
    if (wordsSet.has(reverse) && reverse !== word) {
      semordnilapPairs.push([word, reverse]);
      wordsSet.delete(word);
      wordsSet.delete(reverse);
    }
  }
  return semordnilapPairs;
}
