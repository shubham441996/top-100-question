function mergeTwoSortedArray(arr1, arr2) {
  let firstIndex = 0;
  let secondIndex = 0;
  while (secondIndex < arr2.length && firstIndex < arr1.length) {
    if (arr1[firstIndex] > arr2[secondIndex]) {
      arr1.splice(firstIndex, 0, arr2[secondIndex]);
      secondIndex++;
      firstIndex++;
    } else {
      firstIndex++;
    }
  }
  while (secondIndex < arr2.length) {
    arr1.push(arr2[secondIndex]);
    secondIndex++;
  }
}
// let arr1 = [1, 3, 5, 7];
// let arr2 = [0, 2, 6, 8, 9];

let arr1 = [10, 12];
let arr2 = [5, 18, 20];

mergeTwoSortedArray(arr1, arr2);
