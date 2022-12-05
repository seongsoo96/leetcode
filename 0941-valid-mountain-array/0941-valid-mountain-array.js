/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let N = arr.length;
    let i = 0;
    while(i+1 < N && arr[i] < arr[i+1]) {
        i++;
    }
    if(i === 0 || i === N-1) {
        return false;
    }
    while(i+1 < N && arr[i] > arr[i+1]) {
        i++;
    }
    return N-1 === i;
};