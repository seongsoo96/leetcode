/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const length = nums.length;
    for(let i=0; i<length; i++) {
        const pivot = i;
        
        let leftSum = 0;
        let leftIndex = pivot-1;
        while(leftIndex > -1) {
            leftSum += nums[leftIndex];
            leftIndex--;
        }
        let rightSum = 0;
        let rightIndex = pivot+1;
        while(rightIndex < length) {
            rightSum += nums[rightIndex];
            rightIndex++;
        }
        
        if(leftSum === rightSum) {
            return pivot;
        }
    }
    return -1;
};