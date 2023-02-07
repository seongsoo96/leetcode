/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
var minSpeedOnTime = function(dist, hour) {
    let check = k => {
        let t = 0;
        for (const d of dist) {
            t = Math.ceil(t);
            t += d / k;
        }
        
        return t <= hour;
    }
    
    if (dist.length > Math.ceil(hour)) {
        return -1;
    }
    
    let left = 1;
    let right = Math.pow(10, 7);
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (check(mid)) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return left;    
};