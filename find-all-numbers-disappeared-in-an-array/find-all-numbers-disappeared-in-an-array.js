/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const len = nums.length
    for(let i=0; i<len; i++) {
        const n = Math.abs(nums[i])-1;
        if(nums[n] > 0) {
            nums[n] *= -1
        }
    }
    const result = [];
    for(let i=0; i<len; i++) {
        if(nums[i] > 0) {
            result.push(i+1);
        }
    }
    return result;
};