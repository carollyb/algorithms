/* Write a function that takes in a string of lowercase English-alphhabet
letters and returns the index of the string's first non-repeating character.
The first non-repeating character is the first character in a string that
occurs only once.
If the input string doesn't have any non-repeating characters, your function
should return -1

Hint
Hash tables are very commonly used to keep track of frequencies. 
Build a hash table, where every key is a character in the string
and every value is the corresponding character's frequency in
the input string. You can traverse the entire string once to fill
the hash table, and then with a second traversal through the
string (not a nested traversal), you can use the hash table's
constant-time lookups to find the first character with a frequency of 1 */
export function firstNonRepeatingCharacter(string: string) {
  const characterFrequencies: { [character: string]: number } = {};
  for (const character of string) {
    if (!(character in characterFrequencies))
      characterFrequencies[character] = 0;
    characterFrequencies[character]++;
  }
  for (let idx = 0; idx < string.length; idx++) {
    const character = string[idx];
    if (characterFrequencies[character] === 1) return idx;
  }
  return -1;
}
