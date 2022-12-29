/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let count = 0;
    let right = 0;
    const length = nums.length;
    for(let left=0; left<length; left++) {
        let curr = 1;
        while(curr < k) {
            curr *= nums[right];
            if(curr >= k) {
                right = left+1;
                continue;
            }
            count++
            right++;
            if(right === length) {
                right = left+1;
                break;
            }
        }
    }
    return count;
};