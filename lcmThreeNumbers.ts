function gcd2Numbers(x: number, y: number) {
  x = Math.abs(x);
  y = Math.abs(y);
  while (y) {
    let t = y;
    y = x % y;
    x = t;
  }
  return x;
}

function lcm2Numbers(x: number, y: number) {
  return (x * y) / gcd2Numbers(x, y);
}

//3 numbers
function lcm(array: number[]) {
  // Least common multiple of a list of integers
  let n = 1;
  for (let i = 0; i < array.length; ++i) n = lcm2Numbers(array[i], n);
  return n;
}

function lcm_more_than_two_numbers(input_array) {
  let r1 = 0,
    r2 = 0;
  let l = input_array.length;
  for (let i = 0; i < l; i++) {
    r1 = input_array[i] % input_array[i + 1];
    if (r1 === 0) {
      input_array[i + 1] =
        (input_array[i] * input_array[i + 1]) / input_array[i + 1];
    } else {
      r2 = input_array[i + 1] % r1;
      if (r2 === 0) {
        input_array[i + 1] = (input_array[i] * input_array[i + 1]) / r1;
      } else {
        input_array[i + 1] = (input_array[i] * input_array[i + 1]) / r2;
      }
    }
  }
  return input_array[l - 1];
}

//solução com complexidade O(nlogn)
function gcdNLogN(num1: number, num2: number) {
  if (num2 == 0) return num1;
  return gcdNLogN(num2, num1 % num2);
}

function lcm_of_array(arr: number[]) {
  let lcm = arr[0];
  for (let i = 1; i < arr.length; i++) {
    let num1 = lcm;
    let num2 = arr[i];
    let gcd_val = gcdNLogN(num1, num2);
    lcm = (lcm * arr[i]) / gcd_val;
  }
  return lcm;
}
