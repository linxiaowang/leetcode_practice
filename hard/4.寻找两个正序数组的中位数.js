/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const combineArr = [...nums1, ...nums2].sort((a,b)=>{
    return a < b ? -1 : 1
  })
  if(combineArr.length % 2){
    return combineArr[Math.floor(combineArr.length / 2)]
  }
  return (combineArr[Math.floor(combineArr.length / 2)] + combineArr[Math.floor(combineArr.length / 2 - 1)])/2
};
// @lc code=end

