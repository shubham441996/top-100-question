function sumWithSubArray0(ele) {
  let hash = {};
  let sum = 0;
  for (let i = 0; i < ele.length; i++) {
    sum += ele[i];
    if (hash[sum] || sum === 0 || ele[i] === 0) {
      return true;
    } else {
      hash[sum] = 1;
    }
  }
  return false;
}
let input = [4, 2, 1, 1, 6];
console.log(sumWithSubArray0(input));
