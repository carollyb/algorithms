// my solution
export function bubbleSort(array: number[]) {
  let swaps = true;
  let noOfSwaps = 0;
  while (swaps) {
    let hadSwaps = noOfSwaps;
    for (let i = 0; i < array.length - 1; i++) {
      let next = array[i + 1];
      let current = array[i];
      if (current > next) {
        array[i + 1] = current;
        array[i] = next;
        noOfSwaps++;
      }
    }
    if (noOfSwaps === hadSwaps) {
      swaps = false;
    }
  }
  return array;
}

// slightly different version, with hints from algo expert
export function bubbleSort2(array: number[]) {
  let isSorted = false;
  let noOfSwaps = 0;
  while (!isSorted) {
    isSorted = true;
    let hadSwaps = noOfSwaps;
    for (let i = 0; i < array.length - 1 - noOfSwaps; i++) {
      let next = array[i + 1];
      let current = array[i];
      if (current > next) {
        array[i + 1] = current;
        array[i] = next;
        isSorted = false;
      }
    }
    noOfSwaps++;
  }
  return array;
}
