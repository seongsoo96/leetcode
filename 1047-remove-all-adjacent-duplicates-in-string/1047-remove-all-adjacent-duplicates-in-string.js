/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    const stack = [s[0]];
    for(let i=1; i<s.length; i++) {
        if(stack[stack.length-1] !== s[i]){
            stack.push(s[i])
        } else {
            stack.pop()
        }
    }
    return stack.join('')
};