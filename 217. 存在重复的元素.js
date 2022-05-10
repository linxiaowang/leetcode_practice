function existRepeatElement(nums) {
  const arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (arr.includes(nums[i])) {
      return true;
    }
    arr.push(nums[i]);
  }
  return false
}
const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
console.log(existRepeatElement(nums));
