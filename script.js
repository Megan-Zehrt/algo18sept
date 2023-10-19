/*
Given an array of integers
return the index where the smallest integer is located

return -1 if there is no smallest integer (array is empty) 
since -1 is not a valid index, this indicates it couldn't be found

If the smallest integer occurs more than once, return the index of the first one.
*/

var nums1 = [5, 2, 3];
var expected1 = 1;

var nums2 = [5, 4, 2, 2, 3];
var expected2 = 2;

var nums3 = [];
var expected3 = -1;

/**
 * Returns the index of the smallest number from the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} Index of smallest number or -1 if empty given array.
 */
function indexOfMinVal(nums) {
  if (nums.length == 0) {
    return -1
  }
  var min = nums[0]
  var index = 0
  for(var i = 0; i < nums.length; i++) {
    if (nums[i] < min) {
        min = nums[i]
        index = i
    }
  }
  return index
}

console.log(indexOfMinVal(nums3))

