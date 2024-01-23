/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const isPalindrome = str => {
    // 反转字符串
    const reversedStr = cleanStr.split('').reverse().join('');

    // 判断是否为回文
    return str === reversedStr;
  }
  if(isPalindrome(s)){
    return s
  }
  let max = 0
  let result = ''
  for (let i = 0; i < s.length; i++) {
    let pos = s.indexOf(s[i], i)
    while (pos > -1) {
      const tempStr = s.slice(i, pos + 1)
      if (isPalindrome(tempStr)) {
        if (pos + 1 - i > max) {
          result = tempStr
          max = pos + 1 - i
        }
      }
      pos = s.indexOf(s[i], pos + 1)
    }
  }
  return result
};
