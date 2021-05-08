function binarySearchIterative(arr, key) {
  // Iterative Solution
  let low = 0,
    mid = 0,
    high = arr.length - 1;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    console.log("Before", mid, low, high);
    if (arr[mid] === key) {
      return mid;
    } else if (arr[mid] > key) {
      high = mid;
    } else {
      low = mid + 1;
    }
    console.log("After", mid, low, high);
  }
  return -1;
}

function binarySearchRecursive(arr, start, end, key) {
  if (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === key) {
      return mid;
    } else if (arr[mid] > key) {
      return binarySearchRecursive(arr, start, mid, key);
    } else {
      return binarySearchRecursive(arr, mid + 1, end, key);
    }
  }
  return -1;
}
// let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// console.log(binarySearchRecursive(input, 0, 10, 14));

module.exports = { binarySearchRecursive, binarySearchIterative };
