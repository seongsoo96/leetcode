/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    const map = new Map();
    for(let i=0; i<matches.length; i++) {
        if(!map.has(matches[i][0])) {
            map.set(matches[i][0], 0);
        }
        if(!map.has(matches[i][1])) {
            map.set(matches[i][1], 1);
        } else {
            map.set(matches[i][1], map.get(matches[i][1]) + 1);
        }
    }
    
    const answer = [];
    answer[0] = [];
    answer[1] = [];
    const keys = map.keys();
    const sortArr = [];
    for(const key of keys) {
        sortArr.push(key);
    }
    sortArr.sort((a,b) => a-b);
    
    for(const key of sortArr) {
        if(map.get(key) === 0) {
            answer[0].push(key);
        } else if (map.get(key) === 1) {
            answer[1].push(key);
        }
    }
    
    return answer;
};