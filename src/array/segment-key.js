/**
 * Given an array arr[] and size of array is n and one another key x, and give you a segment size k.
 * The task is to find that the key x present in every segment of size k in arr[].
 */

function findKeyPairInSegment(arr, key, segmentLen) {
  let count = 0;
  for (let i = 0; i <= arr.length - segmentLen; i += segmentLen) {
    for (let j = i; j < i + segmentLen; j++) {
      if (arr[j] == key) {
        count++;
        break;
      }
    }
  }
  return count;
}
// 3, 5, 2, 4, 9, 3, 1, 7, 3, 11, 12, 3
// key=3
// segmentLen=3
let input = [21, 23, 56, 65, 34, 54, 76, 32, 23, 45, 21, 23, 25];
let key = 23;
let segment = 5;
console.log(findKeyPairInSegment(input, key, segment));
