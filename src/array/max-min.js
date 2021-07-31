/**
 * Given an array, write functions to find the minimum and maximum elements in it.
 */

function maxMin(arr) {
  let max = Number.MIN_VALUE;
  let min = Number.MAX_VALUE;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  console.log(max, min);
}
maxMin([12, 1234, 45, 67, 1]);
