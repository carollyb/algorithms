/* Write a function that takes in a non-empty list of non-empty strings
and returns a list of characters that are common to all strings in the list,
ignoring multiplicity.
Note that the strings are not guaranteed to only contain alphanumeric
characters. The list you return can be in any order. */
export function commonCharacters(strings: string[]) {
  const characterCounts: { [character: string]: number } = {};
  for (const string of strings) {
    const uniqueStringCharacters = new Set(string);
    for (const character of uniqueStringCharacters) {
      if (!(character in characterCounts)) {
        characterCounts[character] = 0;
      }
      characterCounts[character]++;
    }
  }
  const finalCharacters: string[] = [];
  for (const [character, count] of Object.entries(characterCounts)) {
    if (count === strings.length) {
      finalCharacters.push(character);
    }
  }
  return finalCharacters;
}
