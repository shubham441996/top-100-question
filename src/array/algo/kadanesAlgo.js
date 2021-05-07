function kadanesAlgo(array) {
  let sum = 0,
    maxSum = Number.NEGATIVE_INFINITY;
  for (let index = 0; index < array.length; index++) {
    sum += array[index];
    if (sum > maxSum) {
      maxSum = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return maxSum;
}
let input = [-1, -2, -3, -4];
console.log(kadanesAlgo(input));
