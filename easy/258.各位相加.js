/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  let result = num.toString().split('').reduce((acc, cur)=>{
    return acc + Number(cur);
  }, 0);
  if (result >= 10){
    return addToOne(result);
  }
  return result;
};
// @lc code=end

