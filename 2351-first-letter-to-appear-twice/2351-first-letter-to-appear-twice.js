/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    const map = new Map();
    for(let i=0; i<s.length; i++) {
        let count = map.get(s[i]) ?? 0;
        count += 1;
        if(count === 2) {
            return s[i];
        }
        map.set(s[i], count);
    }
};