/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  const arr = s.split(' ');
  if (pattern.length !== arr.length) return false;
  const map = new Map();
  for (let i = 0; i < pattern.length; i++){
    const patternReflet = map.get(pattern[i]);
    if (!patternReflet){
      if (Array.from(map.values()).includes(arr[i])){
        return false;
      }
      map.set(pattern[i], arr[i]);
      continue;
    }
    if (patternReflet !== arr[i]){
      return false;
    }
  }
  return true;
};
// @lc code=end

