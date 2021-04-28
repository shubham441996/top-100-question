function kadanesAlgo(arr) {
  let maxSum = Number.NEGATIVE_INFINITY;
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    sum += element;
    if (maxSum < sum) {
      maxSum = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return maxSum;
}
let input = [-2, -1, -3, -4];
console.log(kadanesAlgo(input));
