/* You're given an unordered list of unique integers nums in the range [1, n], where
n represents the length of nums + 2. This means that two numbers in this range
are missing from the list.
Write a function that takes in this list and returns a new list with the
two missing numbers, sorted numerically */
//minha solução
export function missingNumbers(nums: number[]) {
  let expected = Array.from({ length: nums.length + 2 }, (_, i) => i + 1);
  let missing: number[] = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < expected.length; i++) {
    if (!nums.includes(expected[i])) {
      missing.push(expected[i]);
    }
    if (missing.length === 2) return missing;
  }
}
//soluções do algoexpert
export function missingNumbers1(nums: number[]) {
  const includedNums = new Set(nums);
  const solution: number[] = [];
  for (let num = 1; num < nums.length + 3; num++) {
    if (!includedNums.has(num)) {
      solution.push(num);
    }
  }
  return solution;
}
/* ----------------- */
export function missingNumbers2(nums: number[]) {
  let total = sum(arrayFromAtoB(1, nums.length + 3));
  for (const num of nums) {
    total -= num;
  }
  const averageMissingValue = Math.floor(total / 2);
  let foundFirstHalf = 0;
  let foundSecondHalf = 0;
  for (const num of nums) {
    if (num <= averageMissingValue) {
      foundFirstHalf += num;
    } else {
      foundSecondHalf += num;
    }
  }
  const expectedFirstHalf = sum(arrayFromAtoB(1, averageMissingValue + 1));
  const expectedSecondHalf = sum(
    arrayFromAtoB(averageMissingValue + 1, nums.length + 3)
  );
  return [
    expectedFirstHalf - foundFirstHalf,
    expectedSecondHalf - foundSecondHalf,
  ];
}

const arrayFromAtoB = (a: number, b: number) => {
  const array: number[] = [];
  for (let num = a; num < b; num++) {
    array.push(num);
  }
  return array;
};
const sum = (array: number[]) => array.reduce((a, b) => a + b);
