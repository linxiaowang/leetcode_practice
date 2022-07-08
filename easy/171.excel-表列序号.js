/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel 表列序号
 */

// @lc code=start
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
  const len = columnTitle.length;
  let result = 0
  for (let index = 0; index < len; index++){
    const asciiCode = columnTitle.charCodeAt(index)
    const times = len - index - 1
    result += (asciiCode - 65 + 1) * Math.pow(26, times)
  }

  return result
};
// @lc code=end

