/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    for(let i=0; i<s.length; i++) {
        switch(s[i]) {
            case '(': case '{': case '[':
                stack.push(s[i])
                break;
            case ')' :
                if(stack[stack.length-1] === '(') {
                    stack.pop();
                    break;
                }
                return false;
            case '}' :
                if(stack[stack.length-1] === '{') {
                    stack.pop();
                    break;
                }
                return false;
            case ']' :
                if(stack[stack.length-1] === '[') {
                    stack.pop();
                    break;
                }
                return false;
        }
    }
    
    return stack.length ? false : true
};