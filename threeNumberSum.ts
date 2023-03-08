/* Write a function that takes in a non-empty array of distinct integers
representing a target sum. The function should find all triplets in the
array that sum up to the target sum and return a two-dimensional array
of all these triplets. The numbers in each triplet should be ordered in
ascending order, and the triplets themselves should be ordered in ascending
order with respect to the numbers they hold
If no three numbers sum up to the target sum, the function should return
an empty array */

type Triplet = [number, number, number];

export function threeNumberSum(array: number[], targetSum: number): Triplet[] {
  array.sort((a, b) => a - b);
  const result: Triplet[] = [];
  for (let i = 0; i < array.length - 2; i++) {
    let left = i + 1;
    let right = array.length - 1;
    while (left < right) {
      const currentSum = array[i] + array[left] + array[right];
      if (currentSum === targetSum) {
        result.push([array[i], array[left], array[right]]);
        left++;
        right--;
      } else if (currentSum < targetSum) {
        left++;
      } else if (currentSum > targetSum) {
        right--;
      }
    }
  }
  return result;
}
