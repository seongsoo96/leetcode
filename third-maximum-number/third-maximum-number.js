/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let arr = [...new Set(nums)].sort((a,b)=>a-b);
    if(arr.length > 2) {
        return arr[arr.length-3]
    } else {
        return arr[arr.length-1]
    }
};