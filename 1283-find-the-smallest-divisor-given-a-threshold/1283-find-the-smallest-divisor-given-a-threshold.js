/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
// Return the sum of division results with 'divisor'.
var smallestDivisor = function(nums, threshold) {
    let left = 0;
    let right = 1e6;
    
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        const sum = nums.reduce((acc, num) => acc + Math.ceil(num / mid), 0);
        
        if (threshold < sum) left = mid + 1;
        else right = mid;
    }
    
    return left;
};
