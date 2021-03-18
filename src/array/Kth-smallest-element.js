//INFO: this algo will be helpful if we want to find the largest k element in the array
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (j + 1 < array.length && array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j + 1] < array[j]) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = key;
  }
  console.log(array);
}

function selectionSortWithKthMinimum(array, index) {
  for (let i = 0; i < index; i++) {
    let smallestIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[smallestIndex] > array[j]) {
        smallestIndex = j;
      }
    }
    let temp = array[i];
    array[i] = array[smallestIndex];
    array[smallestIndex] = temp;
  }
  return array;
}

function kthMinimumElement(array, index) {
  let sortedArray = bubbleSort(array);
  return sortedArray[index - 1];
}
//Input
const input = [7, 20, 10, 4, 15];
const index = 5;

console.log(input);
//const output = kthMinimumElement(input, index);
// console.log(`${index} Smallest Element will be `, output);
//console.log(insertionSort(input));
const output = selectionSortWithKthMinimum(input, index);
console.log(output[index - 1]);
