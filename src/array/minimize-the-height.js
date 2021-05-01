function getMinDiff(arr, k) {
  let sortedArr = arr.sort((a, b) => a - b);
  result = sortedArr.map((ele, index) => {
    if (ele - k < 0) {
      return ele + k;
    }
    if (index === 0) {
      return ele + k;
    } else if (index === arr.length - 1) {
      return ele - k;
    } else {
      return ele - k;
    }
  });
  return result[sortedArr.length - 1] - result[0];
}

let input = [4, 6];
console.log(getMinDiff(input, 10));
