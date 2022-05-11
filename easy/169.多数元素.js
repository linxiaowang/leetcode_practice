/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

      // const maps = {};
      // for (let item of nums){
      //   if (maps[item]){
      //     maps[item]++;
      //     continue;
      //   }
      //   maps[item] = 1;
      // }
      // for (let item of Object.keys(maps)){
      //   if (maps[item] > nums.length / 2){
      //     return item;
      //   }
      // }

      for (let i = 0; i < nums.length; i++){
        let count = 0;
        while (nums.indexOf(nums[i]) !== -1){
          count++;
          nums.splice(nums.indexOf(nums[i]), 1);
        }
        if (count > nums.length / 2){
          return nums[i];
        }
      }
};
// @lc code=end

