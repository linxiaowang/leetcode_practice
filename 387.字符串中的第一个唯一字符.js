/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  if(s.length === 1){
    return 0
  }
  for(let i = 0; i < s.length; i++){
    const arr = s.split('');
    arr.splice(i,1)
    if(arr.includes(s[i]) === false){
      return i
    }
  }
  return -1
};
// @lc code=end

