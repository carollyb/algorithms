/* Given an array between 1 and n inclusive, where n 
is the length of the array, write a function
that returns the first integer that appears more than once 
(when the array is read from left to right).
  
  In other words, out of all the integers that might occur more than once in the
  input array, your function should return the one whose first duplicate value
  has the minimum index.
  
  If no integer appears more than once, your function should return -1

  Note that you're allowed to mutate the input array.
  
  */
//O(n) time | O(1) space
export function firstDuplicateValue(array: number[]) {
  for (const value of array) {
    const absValue = Math.abs(value);
    if (array[absValue - 1] < 0) return absValue;
    array[absValue - 1] *= -1;
  }
  return -1;
}

//O(n) time | O(n) space
export function firstDuplicateValue1(array: number[]) {
  const seen = new Set();
  for (const value of array) {
    if (seen.has(value)) return value;
    seen.add(value);
  }
  return -1;
}
