export function binarySearch(array: number[], target: number): number {
  let start = 0;
  let end = array.length - 1;
  let mid = Math.floor(array.length / 2);
  while (start <= end) {
    let len = end + start;
    let middle = Math.floor(len / 2);
    if (target === array[middle]) return middle;
    if (target > array[middle]) {
      start = middle + 1;
    } else if (target < array[middle]) {
      end = middle - 1;
    }
  }
  return -1;
}
