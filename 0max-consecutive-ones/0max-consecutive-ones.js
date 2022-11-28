/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let cnt = 0;
    let maxCnt = 0;
    for(const n of nums) {
        cnt++;
        if(n === 0) cnt = 0;
        maxCnt = maxCnt > cnt ? maxCnt : cnt;
    }
    return maxCnt;
};