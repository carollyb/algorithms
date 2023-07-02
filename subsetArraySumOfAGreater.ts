function subsetA(arr: number[]) {
  arr.sort((a, b) => a - b);
  let rightArrSum = arr[arr.length - 1];
  let leftArrSum = arr.reduce((a, b) => a + b) - rightArrSum;

  for (let i = arr.length - 2; i > 0; i--) {
    if (rightArrSum > leftArrSum) return arr.slice(i + 1, arr.length);
    leftArrSum -= arr[i];
    rightArrSum += arr[i];
  }
  return arr;
}

//outra solução
function subsetA2(arr: number[]) {
  arr.sort((a, b) => a - b);
  let rightArrSum = arr[arr.length - 1];
  let leftArrSum = arr.reduce((a, b) => a + b) - rightArrSum;
  let pointer = arr.length - 2;

  while (pointer > 0) {
    if (rightArrSum > leftArrSum) return arr.slice(pointer + 1, arr.length);
    leftArrSum -= arr[pointer];
    rightArrSum += arr[pointer];
    pointer--;
  }
  return arr;
}
