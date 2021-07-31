class Solution {
  getPairsCount(arr, n, k) {
    let count = 0;
    let hash = arr.reduce((a, b) => {
      if (!a[b]) {
        a[b] = 1;
      } else {
        a[b]++;
      }
      return a;
    }, {});
    for (let i = 0; i < arr.length; i++) {
      let diff = k - arr[i];
      if (hash[diff]) {
        count += hash[diff];
      }
      if (arr[i] === diff) {
        count--;
      }
    }
    return count / 2;
  }
}
let solution = new Solution();
let arr = [1, 1, 1, 1];
console.log(solution.getPairsCount(arr, arr.length, 2));
