/* Write a function that takes in a non-empty string and returns its run-length encoding.
From Wikipedia, "run-length encoding is a form of lossless data compression in which
runs of data are stored as a single data value and count, rather than as the original
run." For this problem, a run of data is any sequence of consecutive, identical
characters. So the run "AAA" would be run-length-encoded as "A"
To make things more complicated, however, the input string can contain all sorts of
special characters, including numbers. And since encoded data must be decodable,
this means that we can't naively run length-encode long runs. For example, the run
"AAAAAAAAAAAA" (12 A s), can't naively be encoded as "12A", since this string can
be decoded as either "AAAAAAAAAAAA" or "lAA". Thus, long runs (runs of 10 or more
characters) should be encoded in a split fashion: the aforementioned run should
be encoded as "9АЗА" */
export function runLengthEncoding(string: string) {
  let encodedStringCharacters: string[] = [];
  let currentRunLength = 1;
  for (let i = 1; i < string.length; i++) {
    const currentCharacter = string[i];
    const previousCharacter = string[i - 1];

    if (currentCharacter !== previousCharacter || currentRunLength === 9) {
      encodedStringCharacters.push(currentRunLength.toString());
      encodedStringCharacters.push(previousCharacter);
      currentRunLength = 0;
    }
    currentRunLength++;
  }
  encodedStringCharacters.push(currentRunLength.toString());
  encodedStringCharacters.push(string[string.length - 1]);
  return encodedStringCharacters.join("");
}
