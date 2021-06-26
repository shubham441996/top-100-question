/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  let mergedArr = [];
  intervals.sort((a, b) => a[0] - b[0]);
  for (let interval of intervals) {
    let mergeLen = mergedArr.length;
    if (mergeLen < 1 || mergedArr[mergeLen - 1][1] < interval[0]) {
      mergedArr.push(interval);
    } else {
      mergedArr[mergeLen - 1][1] = Math.max(
        mergedArr[mergeLen - 1][1],
        interval[1]
      );
    }
  }

  return mergedArr;
};

let intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
console.log(merge(intervals));
//output [[1,6],[8,10],[15,18]]
