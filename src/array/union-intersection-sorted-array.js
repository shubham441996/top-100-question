function unionSortedArray(arr1, arr2) {
  let map = new Map();
  for (let i = 0; i < arr1.length; i++) {
    map.set(arr1[i], map.get(arr1[i]) + 1 || 1);
  }
  for (let i = 0; i < arr2.length; i++) {
    map.set(arr2[i], map.get(arr2[i]) + 1 || 1);
  }
  return Array.from(map.keys());
}
function intersectionSortedArray(arr1, arr2) {
  let map = new Map();
  let output = [];
  for (let i = 0; i < arr1.length; i++) {
    map.set(arr1[i], map.get(arr1[i]) + 1 || 1);
  }
  for (let index = 0; index < arr2.length; index++) {
    if (map.has(arr2[index])) {
      output.push(arr2[index]);
    }
  }
  return output;
}
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr2 = [3, 4, 6, 9];

console.log(unionSortedArray(arr1, arr2));
console.log(intersectionSortedArray(arr1, arr2));
