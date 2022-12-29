/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ran, mag) {
    const map = new Map();
    for(const m of mag) {
        if(!map.has(m)) {
            map.set(m, 0);
        }
        map.set(m, map.get(m)+1);
    }
    for(const r of ran) {
        if(!map.has(r)) {
            return false;
        } else {
            map.set(r, map.get(r)-1);
            if(map.get(r) === -1) {
                return false;
            }
        }
    }
    return true;
};