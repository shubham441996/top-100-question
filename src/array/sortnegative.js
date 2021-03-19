function sortNegative(array) {
  let low = 0;
  let high = array.length - 1;
  while (low <= high) {
    if (array[low] > 0) {
      temp = array[high];
      array[high] = array[low];
      array[low] = temp;
      high--;
    } else {
      low++;
    }
  }
  return array;
}
const input = [-12, 11, -13, -5, 6, -7, 5, -3, -6];
console.log(sortNegative(input));
