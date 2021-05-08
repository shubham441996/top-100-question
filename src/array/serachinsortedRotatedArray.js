const search = require("./searching/binary-search");

function searchInSortedRotatedArray(arr, k) {
  let pivot = findPivot(arr, 0, arr.length - 1);
  if (pivot === -1) {
    return search.binarySearchRecursive(arr, 0, arr.length - 1, k);
  }
  if (arr[pivot] === k) {
    return pivot;
  }
  if (arr[0] <= k) return search.binarySearchRecursive(arr, 0, pivot - 1, k);

  return search.binarySearchRecursive(arr, pivot + 1, arr.length - 1, k);
}

function findPivot(arr, start, end) {
  if (start == end) return end;
  if (start > end) return -1;
  let mid = Math.floor((end + start) / 2);
  if (mid < end && arr[mid] > arr[mid + 1]) {
    return mid;
  }
  if (mid > start && arr[mid] < arr[mid - 1]) {
    return mid - 1;
  }
  if (arr[start] >= arr[mid]) {
    return findPivot(arr, start, mid - 1);
  }
  return findPivot(arr, mid + 1, end);
}
let input = [5, 6, 7, 8, 9, 10, 1, 2, 3];
console.log(searchInSortedRotatedArray(input, 3));
