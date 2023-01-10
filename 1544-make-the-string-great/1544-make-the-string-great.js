/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let stack = [s[0]];
    for(let i=1; i<s.length; i++) {
        let a = stack[stack.length-1] ?? '';
        let b = s[i];
        if( Math.abs(a.charCodeAt(0) - b.charCodeAt(0)) === 32 ) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    return stack.join('');
};