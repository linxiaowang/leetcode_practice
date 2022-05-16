/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  const maps = {};
  for (let i = 0; i < numbers.length; i++){
    if (typeof maps[numbers[i]] === 'number' && (maps[numbers[i]]) < i ){
      return [maps[numbers[i]] + 1, i + 1];
    }
    maps[target - numbers[i]] = i;
  }
  return false;
};
// @lc code=end

