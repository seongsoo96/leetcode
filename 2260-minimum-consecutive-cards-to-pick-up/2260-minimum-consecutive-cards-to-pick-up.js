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
    
    const arr = [];
    for(const v of map.values()) {
        if(v.length > 1) {
            arr.push(v)
        }
    }
    
    for(const a of arr) {
        // if(a.length === 2) {
        //     const diff = v[1] - v[0] + 1;
        //     if(min > diff) {
        //         min = diff;
        //     }
        // } else {
            for(let i=1; i<a.length; i++) {
                let diff = a[i] - a[i-1] + 1;
                if(min > diff) {
                    min = diff;
                }
            }
        // }
    }
    
    return min === Number.MAX_SAFE_INTEGER ? -1 : min
};