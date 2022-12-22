/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];
    for(let i=0; i<tokens.length; i++) {
        if(!Object.is(NaN, Number(tokens[i]))) {
            stack.push(Number(tokens[i]));
        } else {
            let a = stack.pop();
            let b = stack.pop();
            switch(tokens[i]) {
                case "+" :
                    stack.push(b+a);
                    break;
                case "-" :
                    stack.push(b-a);
                    break;
                case "*" :
                    stack.push(b*a);
                    break;
                case "/" :
                    if(b/a > 0) {
                        stack.push(Math.floor(b/a));
                    } else {
                        stack.push(Math.ceil(b/a))
                    }
                    break;
            }
        }
    }
    return stack.pop();
};