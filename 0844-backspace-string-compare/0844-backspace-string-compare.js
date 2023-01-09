/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let sStack = [];
    for(let i=0; i<s.length; i++) {
        if(s[i] === '#') {
            sStack.pop();
        } else {
            sStack.push(s[i]);
        }
    }
    
    let tStack = [];
    for(let i=0; i<t.length; i++) {
        if(t[i] === '#') {
            tStack.pop();
        } else {
            tStack.push(t[i]);
        }
    }
    
    return sStack.join('') === tStack.join('')
};