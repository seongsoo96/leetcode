/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function(cards) {
    const map = new Map()
    for(const [i, c] of cards.entries()) {
        if(!map.has(c)) {
            map.set(c, [])
        }
        map.get(c).push(i)
    }
    let min = Number.MAX_SAFE_INTEGER
    
    for(const [k,a] of map) {
        for(let i=0; i<a.length-1; i++) {
            let diff = a[i+1] - a[i] + 1;
            min = Math.min(min, diff);
        }
    }
    
    return min === Number.MAX_SAFE_INTEGER ? -1 : min
};