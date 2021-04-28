function cyclicallyRotateArray(arr, n) {
  while (n-- > 0) {
    let temp = arr[0];
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = temp;
  }
  return arr;
}
let input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(cyclicallyRotateArray(input, 2));
