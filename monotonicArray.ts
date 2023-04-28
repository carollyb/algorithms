/* 
Write a function that takes in an array of integers and returns a boolean representing
whether the array is monotonic.
The array is said to be monotonic if its elements, from left to right, are entirely
non-icreasing or entirely non-decreasing.
Non-icreasing elements aren't necessarily exclusively decreasing; they simply don't
increase. Similarly, non-decreasing elements aren't necessarily exclusively increasing;
they simply don't decrease */
//minha solução
export function isMonotonic(array: number[]) {
  let isAscending: boolean;
  if (array[0] < array[1]) {
    isAscending = true;
  } else {
    if (array[2] && array[1] < array[2]) {
      isAscending = true;
    } else {
      isAscending = false;
    }
  }
  for (let i = 0; i < array.length - 1; i++) {
    if (isAscending) {
      if (array[i] > array[i + 1]) {
        return false;
      }
    } else {
      if (array[i] < array[i + 1]) {
        return false;
      }
    }
  }
  return true;
}
//duas soluções do algoexpert:
export function isMonotonic2(array: number[]) {
  if (array.length <= 2) return true;
  let direction = array[1] - array[0];
  for (let i = 2; i < array.length; i++) {
    if (direction === 0) {
      direction = array[i] - array[i - 1];
      continue;
    }
    if (breaksDirection(direction, array[i - 1], array[i])) {
      return false;
    }
  }
  return true;
}
function breaksDirection(
  direction: number,
  previousInt: number,
  currentInt: number
) {
  const difference = currentInt - previousInt;
  if (direction > 0) return difference < 0;
  return difference > 0;
}
//-------------------
export function isMonotonic3(array: number[]) {
  let isNonDecreasing = true;
  let isNonIncreasing = true;
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) isNonDecreasing = false;
    if (array[i] > array[i - 1]) isNonIncreasing = false;
  }
  return isNonDecreasing || isNonIncreasing;
}
