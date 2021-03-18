// Solution Complexity-o(n)
function findMinimumAndMaximumInArray(ele){
 let min=ele[0]
 let max=ele[0]
//  INFO: Iterate the array and update the min and max variable by comparison.
 for(let i=1;i<ele.length;i++){
     if(ele[i]>max){
       max=ele[i]
     }
     else if(ele[i]< min){
         min=ele[i]
     }
 }
 console.log(min,max)
}

let input=[1000, 0, 445,  1, 330, 3000]

findMinimumAndMaximumInArray(input)