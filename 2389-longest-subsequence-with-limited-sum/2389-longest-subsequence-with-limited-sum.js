/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
    let bs = (arr, target) => {
        let left = 0
        let right = arr.length - 1
        while(left <= right) {
            let mid = Math.floor((left + right) / 2)
            if(arr[mid] === target) {
                return mid + 1
            }
            if(arr[mid] > target) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
        return left
    }
    
    
    
    nums.sort((a, b) => a - b)
    let presum = [nums[0]]
    for(let i=0; i<nums.length-1; i++) {
        presum.push(presum[i] + nums[i+1])
    }
    
    let ans = []
    for(const q of queries) {
        let left = 0
        ans.push(bs(presum, q))
    }
    
    return ans
};

[1,2,4,5]
[1,3,7,12]
1, 2, 3, 4