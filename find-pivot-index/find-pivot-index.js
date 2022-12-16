/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let sum = 0;
    let sumLeft = 0;
    for(const n of nums) {
        sum += n;
    }
    for(let i=0; i<nums.length; i++) {
        if(sumLeft === sum - sumLeft - nums[i]) {
            return i;
        }
        sumLeft += nums[i];
    }
    return -1;
};
