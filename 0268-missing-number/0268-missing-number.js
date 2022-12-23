/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const length = nums.length;
    const set = new Set();
    for(let i=0; i<length; i++) {
        set.add(nums[i]);
    }
    for(let i=0; i<=length; i++) {
        if(!set.has(i)) {
            return i
        }
    }
};