/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let cnt = 0;
    for(let n of nums) {
        // let digitsCnt = 1;
        n = n+'';
        if(n.length % 2 === 0) {
            cnt++;
        }
        // while(n >= 10) {
        //     n = n/10;
        //     digitsCnt++;
        // }
        // if(digitsCnt%2 === 0) {
        //     cnt++;
        // }
    }
    return cnt;
};