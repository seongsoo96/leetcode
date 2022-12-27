/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function(nums) {
    const dic = new Map()
    let ans = -1;
    for (const num of nums) {
        let digitSum = (num + '').split('').map(num => Number(num)).reduce((a,c) => a+c)
        if (dic.has(digitSum)) {
            ans = Math.max(ans, num + dic.get(digitSum));
        }
        
        dic.set(digitSum, Math.max(dic.get(digitSum) || 0, num));
    }
    
    return ans;
};