/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.replace(/[^a-zA-Z0-9]/g, '');
  let start = 0;
  let end = s.length - 1;
  while (start < end){
    let a = isNaN(Number(s[start])) ? s[start].toLowerCase() : s[start];
    let b = isNaN(Number(s[end])) ? s[end].toLowerCase() : s[end];
    if (a !== b){
      return false;
    }
    start++;
    end--;
  }
  return true;
};
// @lc code=end

