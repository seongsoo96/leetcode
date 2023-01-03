/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
    let prefix = [nums[0]];
    const leng = nums.length;
    for(let i=1; i<leng; i++) {
        prefix.push(prefix[i-1] + nums[i]);
    }
    
    let count = 0;
    for(let i=0; i<leng-1; i++) {
        let left = prefix[i];
        let right = prefix[leng-1] - prefix[i];
        if(left >= right) {
            count++;
        }
    }
    return count;
};