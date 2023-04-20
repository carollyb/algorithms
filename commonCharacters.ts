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
