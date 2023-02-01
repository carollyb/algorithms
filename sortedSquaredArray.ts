/* Write a function that takes in a non-empty array of integers that are sorted
in ascending order and returns a new array of the same length with the squares
 of the original integers also sorted in ascending order. */
//  / O(n) time I O(n) space - where n is the length of the input array
export function sortedSquaredArray(array: number[]) {
  const sortedSquares = new Array(array.length).fill(0);
  let smallerValueIdx = 0;
  let largerValueIdx = array.length - 1;
  let idx = array.length - 1;
  for (idx; idx >= 0; idx--) {
    const smallerValue = array[smallerValueIdx];
    const largerValue = array[largerValueIdx];
    if (Math.abs(smallerValue) > Math.abs(largerValue)) {
      sortedSquares[idx] = smallerValue * smallerValue;
      smallerValueIdx++;
    } else {
      sortedSquares[idx] = largerValue * largerValue;
      largerValueIdx--;
    }
  }
  return sortedSquares;
}
/* This code takes an input array of numbers and returns a new array with the
 squares of the numbers in the input array, sorted in non-descending order.

It does this by using two pointers, one pointing to the smallest value 
(smallerValueIdx) and one pointing to the largest value (largerValueIdx) in 
the input array. The resulting sorted squares are stored in the sortedSquares 
array. In each iteration of the loop, the absolute values of the smallerValue
 and largerValue are compared, and the one with the larger absolute value is 
 squared and stored in the sortedSquares array at the current index (idx). 
 The pointer pointing to the value used in the calculation is then incremented
  or decremented accordingly. The loop continues until idx is no longer >= 0,
  at which point the sortedSquares array is returned. */
