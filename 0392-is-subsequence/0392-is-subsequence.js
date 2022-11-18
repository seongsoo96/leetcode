/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if(s.length > t.length) {
        return false;
    }
    
    let sub = 0;
    for(let i=0; i<t.length; i++) {
        if(s[sub] === t[i]) {
            sub++;
        }
    }
    
    return sub === s.length
};