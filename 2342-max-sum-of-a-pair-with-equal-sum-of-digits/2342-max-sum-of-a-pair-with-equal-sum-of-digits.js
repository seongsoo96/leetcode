/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function(nums) {
    const map = new Map()
    for(const n of nums) {    
        let sum = (n + '').split('').map(n => Number(n)).reduce((a,c) => a+c)
        if(!map.has(sum)) {
            map.set(sum, [])
        }
        map.get(sum).push(n)
    }
    
    let ans = -1;
    for(const [key, arr] of map) {
        if(arr.length > 1) {
            arr.sort((a,b) => b-a)
            ans = Math.max(ans, arr[0] + arr[1])
        }
    }
    
    return ans;
};