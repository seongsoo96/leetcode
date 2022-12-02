/**
 * @param {number[]} nums
 * @return {number}
 */
// My solution
var removeDuplicates = function(nums) {
    for(let i=0; i<nums.length-1; i++) {
        if(nums[i] === nums[i+1]) {
            nums.splice(i+1, 1);
            i--;
        }
    }
    return nums.length
};

//Others
var removeDuplicates = function(nums) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != nums[i]) 
            nums[++i] = nums[j];
    }
    return ++i;
};