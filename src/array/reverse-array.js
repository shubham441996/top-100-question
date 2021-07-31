function reverseArray(arr) {
  let len = arr.length;
  let mid = Math.trunc(len / 2);
  for (let i = 0; i < mid; i++) {
    console.log(arr[i], arr[len - i - 1], "Before");
    [arr[i], arr[len - i - 1]] = [arr[len - i - 1], arr[i]];
    console.log(arr[i], arr[len - i - 1], "After");
  }
  console.log(arr);
}
// let input = [4, 5, 1, 2];
let input = [1, 2, 3];
reverseArray(input);
