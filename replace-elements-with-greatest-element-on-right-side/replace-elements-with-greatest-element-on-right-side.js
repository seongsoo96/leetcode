/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let answer = [];
    for(let i=0; i<arr.length; i++){
        let max = -1;
        for(let j=i+1; j<arr.length; j++) {
            if(arr[j] >= max){
                max = arr[j]
            }
        }
        answer.push(max);
    }
    return answer;
};