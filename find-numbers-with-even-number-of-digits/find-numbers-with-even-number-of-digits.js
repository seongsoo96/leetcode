/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let cnt = 0;
    for(let n of nums) {
        n = n+'';
        if(n.length % 2 === 0) {
            cnt++;
        }
    }
    return cnt;
};