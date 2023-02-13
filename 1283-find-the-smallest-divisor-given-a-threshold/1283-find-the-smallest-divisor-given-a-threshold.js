/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
// Return the sum of division results with 'divisor'.
let findDivisionSum = (nums, divisor) => {
    let result = 0
    for(const num of nums) {
        result += Math.ceil(num / divisor)
    }
    return result
}


var smallestDivisor = function(nums, threshold) {
    let ans = -1
    
    let low = 1
    let high = nums.reduce((a, b) => Math.max(a, b), nums[0])
    
    while(low <= high) {
        const mid = Math.floor((low + high) / 2)
        const result = findDivisionSum(nums, mid)
        
        if(result <= threshold) {
            ans = mid
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    
    return ans
};
