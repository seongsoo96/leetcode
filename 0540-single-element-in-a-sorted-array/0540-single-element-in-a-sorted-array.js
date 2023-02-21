/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let map = new Map()
    for(let i=0; i<nums.length; i++) {
        if(map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1)
        } else {
            map.set(nums[i], 1)
        }
    }
    for(let i=0; i<nums.length; i++) {
        if(map.get(nums[i]) === 1) {
            return nums[i]
        }
    }
};