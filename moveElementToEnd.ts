/* you're given an array of integers and an integer. Write a function that
moves all instances of that integer in the array to the end of the array and
returns the array.
The function should perform this in place (it should mutate the input array)
and doesn't need to maintain the order of the other integers.

O(n) time | O(1) space where n is the length of the array*/
export function moveElementToEnd(array: number[], toMove: number) {
  let leftPointer = 0;
  let rightPointer = array.length - 1;
  while (leftPointer < rightPointer) {
    while (leftPointer < rightPointer && array[rightPointer] === toMove) {
      rightPointer--;
    }
    if (array[leftPointer] === toMove) {
      const temp = array[rightPointer];
      array[rightPointer] = array[leftPointer];
      array[leftPointer] = temp;
    }
    leftPointer++;
  }
  return array;
}
