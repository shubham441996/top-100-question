function linearSearch(array, key) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === key) {
      return i;
    }
  }
  return -1;
}
// const input = [1, 5, 3, 7, 4, 9, 14, 11, 15];
// console.log(linearSearch(input, 5));
