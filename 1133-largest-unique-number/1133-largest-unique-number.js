/**
 * @param {number[]} nums
 * @return {number}
 */
var largestUniqueNumber = function(nums) {
    const map = new Map()
    let max = -1
    nums.sort((a,b) => b-a)
    
    for(const n of nums) {
        if(!map.has(n)) {
            map.set(n, 0);
        } else {
            map.set(n, map.get(n)+1)
        }
    }
    
    const keys = map.keys()
    for(const key of keys) {
        if(map.get(key) === 0) {
            return key
        }
    }
    
    return max
};