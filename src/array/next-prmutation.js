/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let isPermutationExist = "not-find";
  let len = nums.length;
  for (let i = len - 1; i > 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] > nums[j]) {
        isPermutationExist = "find";
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        console.log(nums, j + 1, len, "Before*******");
        sortPartOfArray(nums, j + 1, len);
        console.log(nums, "After*******");
        break;
      }
    }
    if (isPermutationExist === "find") {
      break;
    }
  }
  if (isPermutationExist === "not-find") {
    nums.sort((a, b) => a - b);
  }
  console.log(nums);
};

var nextPermutationFinal = function (nums) {
  const n = nums.length;

  let i = n - 2;

  while (i >= 0 && nums[i] >= nums[i + 1]) i--;

  let j = n - 1;

  if (i != -1) {
    while (j >= 0 && nums[j] <= nums[i]) j--;

    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  i++;
  j = n - 1;

  while (i < j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
    i++;
    j--;
  }
  console.log(nums, "*****");
};

function sortPartOfArray(nums, start, end) {
  let index = 0;
  for (let i = start; i < end; i++) {
    for (let j = start; j < end - index; j++) {
      if (nums[j] > nums[j + 1]) {
        temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
    index++;
  }
}
nextPermutationFinal([1, 1, 5]);
// [2,2,1,0,3,4]
//[5,5,2,3,4,7]
