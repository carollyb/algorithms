function gcdArray(input: number[]) {
  if (toString.call(input) !== "[object Array]") return false;
  let len, a, b;
  len = input.length;
  if (!len) {
    return null;
  }
  a = input[0];
  for (var i = 1; i < len; i++) {
    b = input[i];
    a = gcdTwoNumbers(a, b);
  }
  return a;
}

function gcdTwoNumbers(x: number, y: number) {
  x = Math.abs(x);
  y = Math.abs(y);
  while (y) {
    let t = y;
    y = x % y;
    x = t;
  }
  return x;
}

var gcd = gcdArray([5, 15, 110]);
console.log(gcd); // output: 5
