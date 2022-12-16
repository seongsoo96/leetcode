/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let max = 0;
    let index = 0;
    for(let i=0; i<nums.length; i++) {
        if(max < nums[i]) {
            max = nums[i];
            index = i;
        }
    }
    
    for(let i=0; i<nums.length; i++) {
        if((i != index) && (2*nums[i] > max)) {
            return -1;
        }
    }
    
    return index;
};