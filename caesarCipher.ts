//solução 1
export function caesarCipherEncryptor(string: string, key: number) {
  const newLetters: string[] = [];
  const newKey = key % 26;
  for (let letter of string) {
    newLetters.push(getNewLetter(letter, newKey));
  }
  return newLetters.join("");
}

function getNewLetter(letter: string, key: number) {
  const newLetterCode = letter.charCodeAt(0) + key;
  return newLetterCode <= 122
    ? String.fromCharCode(newLetterCode)
    : String.fromCharCode(96 + (newLetterCode % 122));
}

//solução 2
export function caesarCipherEncryptor2(string: string, key: number) {
  const newLetters: string[] = [];
  const newKey = key % 26;
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  for (let letter of string) {
    newLetters.push(getNewLetter2(letter, newKey, alphabet));
  }
  return newLetters.join("");
}

function getNewLetter2(letter: string, key: number, alphabet: string[]) {
  const newLetterCode = alphabet.indexOf(letter) + key;
  return alphabet[newLetterCode % 26];
}
