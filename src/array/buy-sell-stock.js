/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // let maxDiff=0
  // let buy=-1;
  // let sell=-1
  // for(let i=0;i<prices.length-1;i++){
  //     for(let j=i+1;j<prices.length;j++){
  //         let diff=prices[j]-prices[i];
  //         if(diff>=0 && maxDiff<diff){
  //             maxDiff=diff;
  //             [buy,sell]=[i,j]
  //           }
  //     }
  // }
  // return maxDiff

  let maxProfit = 0;
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    maxProfit = Math.max(maxProfit, prices[i] - min);
  }
  return maxProfit;
};

maxProfit([7, 1, 5, 3, 6, 4]);
