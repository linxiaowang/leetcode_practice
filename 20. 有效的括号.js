/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    if(s.length % 2 > 0 ){
        return false
      }
      const bracketsObj = {
        '{': '}',
        '(': ')',
        '[': ']',
      }
      let stack = []
      for(let char of s){
        if(['(','{','['].indexOf(char) > -1){
          stack.push(char)
        }else{
          if(char !== bracketsObj[stack.pop()]){
            return false
          }
        }
      }
    
      return stack.length === 0
};
// @lc code=end

