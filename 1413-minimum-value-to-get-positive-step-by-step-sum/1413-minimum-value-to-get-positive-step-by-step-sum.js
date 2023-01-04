/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    for(let i=1; i<nums.length; i++) {
        nums[i] += nums[i-1];
    }
    console.log(nums);
    nums.sort((a,b) => a-b);
    console.log(nums);
    if(nums[0] > 0) {
        return 1;
    } else {
        return 1-nums[0]
    }
};