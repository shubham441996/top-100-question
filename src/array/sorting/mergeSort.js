function mergeSort(arr, start, end) {
  let mid = Math.trunc((start + end) / 2);
  if (mid < end) {
    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end);
    mergeTwoSortedArray(arr, start, mid, end);
  }
  return;
}

function mergeTwoSortedArray(arr, start, mid, end) {
  let firstArray = arr.slice(start, mid + 1);
  let secondArray = arr.slice(mid + 1, end + 1);
  let index = start;
  let n1 = firstArray.length;
  let n2 = secondArray.length;
  let firstindex = 0;
  let secondindex = 0;
  while (firstindex < n1 && secondindex < n2) {
    if (firstArray[firstindex] > secondArray[secondindex]) {
      arr[index] = secondArray[secondindex];
      secondindex++;
    } else {
      arr[index] = firstArray[firstindex];
      firstindex++;
    }
    index++;
  }
  while (firstindex < n1) {
    arr[index] = firstArray[firstindex];
    firstindex++;
    index++;
  }
  while (secondindex < n2) {
    arr[index] = secondArray[secondindex];
    secondindex++;
    index++;
  }
  console.log(firstArray, secondArray, start, mid, end);
}
const input = [1, 4, 7, 9, 2, 3, 5, 10];
mergeSort(input, 0, input.length - 1);
console.log(input);
