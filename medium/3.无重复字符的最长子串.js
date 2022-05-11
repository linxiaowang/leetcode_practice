/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let max = 0;
  let tempStr = '';
  for (let i = 0; i < s.length; i++) {
    if (tempStr.indexOf(s[i]) === -1) {
      tempStr += s[i];
      max = Math.max(max, tempStr.length);
    } else {
      tempStr = tempStr.slice(tempStr.indexOf(s[i]) + 1)   + s[i];
    }
  }
  return max;
};
// @lc code=end

