/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let compareNum = nums1.length > nums2.length ? nums2 : nums1;
  compareNum = compareNum.filter(item=>nums2.indexOf(item) !== -1);
  return [...new Set(compareNum)];
};
// @lc code=end

