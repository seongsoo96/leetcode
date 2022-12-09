/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    const orderArr = JSON.parse(JSON.stringify(heights)).sort((a,b) => a-b);
    let cnt = 0;
    for(let i=0; i<heights.length; i++) {
        if(orderArr[i] !== heights[i]) {
            cnt++;
        }
    }
    return cnt;
};