/* Write a function that takes in two non-empty arrays of integers, finds
the pair of numbers (one from each array) whose absolute difference is
closest to zero, and returns an array containing these two numbers, with
the number from the first array in the first position.
Note that the absolute difference of two integers is the distance between
them on the real number line. For example, the absolute difference of -5
and 5 is 10, and the absolute difference of -5 and -4 is 1.
You can assume that there will only be one pair of numbers with the
smallest difference. */
export function smallestDifference(arrayOne: number[], arrayTwo: number[]) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let idx1 = 0;
  let idx2 = 0;
  let smallest = Infinity;
  let current = Infinity;
  let smallestPair: number[] = [];
  while (idx1 < arrayOne.length && idx2 < arrayTwo.length) {
    let firstNum = arrayOne[idx1];
    let secondNum = arrayTwo[idx2];
    if (firstNum < secondNum) {
      current = secondNum - firstNum;
      idx1++;
    } else if (secondNum < firstNum) {
      current = firstNum - secondNum;
      idx2++;
    } else {
      return [firstNum, secondNum];
    }
    if (smallest > current) {
      smallest = current;
      smallestPair = [firstNum, secondNum];
    }
  }
  return smallestPair;
}
