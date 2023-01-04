/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    for(let i=1; i<nums.length; i++) {
        nums[i] += nums[i-1];
    }
    let min = Number.MAX_SAFE_INTEGER
    for(let i=0; i<nums.length; i++) {
        if(nums[i] < min) {
            min = nums[i]
        }
    }
    return min >= 0 ? 1 : 1-min
};