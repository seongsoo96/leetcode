/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let ans = Number.MIN_SAFE_INTEGER, left = 0, cal = 0;
    for(let right=k-1; right<nums.length; right++) {
        while(left <= right) {
            cal += nums[left];
            left++;
        }
        ans = Math.max(ans, cal/k)
        cal -= nums[right+1-k];
    }
    return ans;
};