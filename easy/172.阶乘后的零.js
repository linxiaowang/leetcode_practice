/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  const getTrailing = val =>{
    if(val === 1){
      return val
    }
    return val * getTrailing(val-1)
  }
  const getZeroNums = val => {
    let num = 0
    for(let item of String(val)){
      if(item === '0'){
        num++
      }
    }
    return num
  }
  return getZeroNums(getTrailing(n))
};
// @lc code=end

