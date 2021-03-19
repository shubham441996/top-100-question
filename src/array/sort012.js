function sort012(array) {
  let low = 0;
  let mid = 0;
  let high = array.length - 1;
  let temp;
  while (mid <= high) {
    switch (array[mid]) {
      case 0:
        temp = array[mid];
        array[mid] = array[low];
        array[low] = temp;
        mid++;
        low++;
        break;
      case 1:
        mid++;
        break;
      default:
        temp = array[high];
        array[high] = array[mid];
        array[mid] = temp;
        high--;
        break;
    }
  }
  return array;
}
const input = [0, 1, 2, 2, 2, 1, 1, 0, 1, 2];
const output = sort012(input);
console.log(output, "*****");
