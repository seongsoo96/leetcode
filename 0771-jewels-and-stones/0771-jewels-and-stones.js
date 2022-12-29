/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    const map = new Map();
    for(const jewel of jewels) {
        map.set(jewel, 1);
    }
    let count = 0;
    for(const stone of stones) {
        if(map.has(stone)) {
            count++;
        }
    }
    return count;
};