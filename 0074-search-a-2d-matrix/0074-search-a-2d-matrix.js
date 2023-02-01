/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    for(const nums of matrix) {
        let left = 0
        let right = nums.length - 1
        while(left <= right) {
            let mid = Math.floor((left + right) / 2)
            let num = nums[mid]
            if(num === target) {
                return true
            }
            if(num > target) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
    }
    return false
};