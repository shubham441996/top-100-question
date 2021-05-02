function quickSort(arr, start, end) {
  if (start < end) {
    const partitionindex = partition(arr, start, end);
    quickSort(arr, start, partitionindex - 1);
    quickSort(arr, partitionindex + 1, end);
  }
  return;
}

function partition(arr, start, end) {
  let partitionIndex = start;
  let pivot = arr[end];
  for (let i = start; i <= end; i++) {
    if (pivot > arr[i]) {
      let temp = arr[partitionIndex];
      arr[partitionIndex] = arr[i];
      arr[i] = temp;
      partitionIndex++;
    }
  }
  let temp = arr[partitionIndex];
  arr[partitionIndex] = pivot;
  arr[end] = temp;
  return partitionIndex;
}
const input = [1, 4, 7, 9, 2, 3, 5, 10];
quickSort(input, 0, input.length - 1);
console.log(input);
