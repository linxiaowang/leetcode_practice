/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const arr = [];
  while (n !== 1){
    n = n.toString().split('').reduce((acc, cur)=>{
      return acc + Math.pow(Number(cur), 2);
    }, 0);
    if (arr.includes(n)){
      return false;
    }
    arr.push(n);
  }
  return true;
};
// @lc code=end

