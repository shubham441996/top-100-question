function longFactorial(n) {
  let arr = [1];
  let arrSize = arr.length;
  for (let i = 2; i <= n; i++) {
    arrSize = multiply(i, arr, arrSize);
  }
}

function multiply(i, arr, arrSize) {
  let carry = 0;
  for (let j = 0; j < arrSize; j++) {
    let prod = i * arr[j] + carry;
    arr[j] = prod % 10;
    carry = Math.floor(prod / 10);
  }
  while (carry) {
    arr[arrSize] = carry % 10;
    carry = Math.floor(carry / 10);
    arrSize++;
  }
  return arrSize;
}

let input = 10;
longFactorial(input);
