/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let ans = 0, left = 0, right = 0;
    for(right=0; right<nums.length; right++) {
        if(nums[right] === 0) {
            k--;
        }
        if(k < 0) {
            k += 1-nums[left];
            left++
        }
    }
    return right - left;
};