/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    
    // My solution
    // let answer = [];
    // while(s.length > 0) {
    //     answer.push(s.pop());
    // }
    // s.push(...answer);
    
    // Others
    let left = 0;
    let right = s.length-1;
    while(left <= right) {
        [s[right], s[left]] = [s[left], s[right]]
        left++;
        right--;
    }
};