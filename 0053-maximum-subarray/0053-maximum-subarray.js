/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let curr_subarray = 0
    let max_subarray = -Number.MAX_VALUE
    for(const num of nums) {
        curr_subarray = Math.max(num, curr_subarray + num)
        max_subarray = Math.max(max_subarray, curr_subarray)
    }
    
    return max_subarray
};