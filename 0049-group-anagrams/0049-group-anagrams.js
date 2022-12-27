/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();
    for(const str of strs) {
        const sortedStr = str.split('').sort().join('');
        if(map.has(sortedStr)) {
            map.set(sortedStr, [...map.get(sortedStr), str].sort());
        } else {
            map.set(sortedStr, [str])
        }
    }
    const answer = [];
    const values = map.values();
    for(const value of values) {
        answer.push(value);
    }
    return answer;
};