/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const maps = {};
  for (let item of nums){
    if (maps[item]){
      maps[item]++;
      continue;
    }
    maps[item] = 1;
  }
  for (let item of Object.keys(maps)){
    if (maps[item] === 1){
      return item;
    }
  }

};
// @lc code=end

