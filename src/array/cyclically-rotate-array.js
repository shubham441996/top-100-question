function cyclicallyRotateArrayOneByOne(arr, n) {
  while (n-- > 0) {
    let temp = arr[0];
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = temp;
  }
  return arr;
}
function rotateArrayUsingSeparateArray(input, n) {
  let temp = input.slice(0, n);
  let i = 0;
  while (n-- > 0) {
    input.shift();
    input.push(temp[i]);
    i++;
  }
  return input;
}

let input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(rotateArrayUsingSeparateArray(input, 4));
