/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    //i != j
    //0 <= i, j < arr.length
    //arr[i] == 2 * arr[j]
    
    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<arr.length; j++) {
            if((i !== j) && (arr[i] === 2*arr[j])) {
                return true
            }
        }
    }
    return false;
};