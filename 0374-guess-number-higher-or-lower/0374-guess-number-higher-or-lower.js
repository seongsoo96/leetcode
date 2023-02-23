/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let low = 0
    let high = n
    while(low <= high) {
        let mid = Math.floor((low + high) / 2)
        switch (guess(mid)) {
            case -1 :
                high = mid - 1
                break;
            case 1 :
                low = mid + 1
                break;
            case 0 :
                return mid
        }
                
    }
};