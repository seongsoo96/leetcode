/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let small = 0
    let big = nums.length - 1
    
    while(small <= big) {
        let mid = Math.floor((small + big) / 2)
        
        if(nums[mid] === target) {
            return mid
        }
        
        if(nums[mid] > target) {
            big = mid -1
        } else {
            small = mid + 1
        }
    }
    return small
};