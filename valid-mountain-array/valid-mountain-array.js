/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let i = 0;
    let L = arr.length;
    
    while(arr[i] < arr[i+1] && i < L) {
        i++;
    }
    if(i === 0 || i === L-1) {
        return false;
    }
    while(arr[i] > arr[i+1] && i < L) {
        i++;
    }
    return i === L-1;
};