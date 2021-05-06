// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.
function findDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[Math.abs(arr[i])] < 0) {
      return Math.abs(arr[i]);
    }
    arr[Math.abs(arr[i])] = -1 * arr[Math.abs(arr[i])];
  }
}
let arr = [2, 2, 2, 2, 2];
console.log(findDuplicate(arr));
