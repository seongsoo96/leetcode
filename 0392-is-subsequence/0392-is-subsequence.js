/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    const s_length = s.length;
    const t_length = t.length;
    
    if(s_length > t_length) {
        return false;
    }
    
    
    let sub = 0;
    for(let i=0; i<t_length; i++) {
        if(s[sub] === t[i]) {
            sub++;
        }
    }
    
    return sub === s_length;
};