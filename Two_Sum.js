// https://leetcode.com/problems/two-sum/

// Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, 
// and you may not use the same element twice.
// You can return the answer in any order.

// O(n²)
const twoSum = function (nums, target) {
  let result = 0;

  for (let x = 0; x < nums.length; x++) {
    for (let y = 0; y < x; y++) {
      if (nums[x] + nums[y] == target) {
        result = [x, y];
      }
    }
  }

  return result;
};


// O(n) HashTable
const twoSum2 = function (nums, target) {
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
      let j = target - nums[i];
      
      if (j in obj) return [obj[j], i];

      obj[nums[i]] = i;
  }
};

console.log(twoSum([1, 2, 3, 7, 8, 19, 20, 3, 85, 10, 48, 17], 65));
console.log(twoSum2([1, 2, 3, 7, 8, 19, 20, 3, 85, 10, 48, 12], 60));