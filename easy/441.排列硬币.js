/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  let count = 0
  let rowNum = 1
  while(n > 0){
    n -= rowNum
    rowNum++
    if(n >= 0){
      count++
    }
  }
  return count
};
// @lc code=end

