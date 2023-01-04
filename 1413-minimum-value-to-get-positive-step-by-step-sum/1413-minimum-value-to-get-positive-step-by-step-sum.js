/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let min = 0, total = 0;
    for(const num of nums) {
        total += num;
        min = Math.min(min,  total);
    }
    return 1-min
};