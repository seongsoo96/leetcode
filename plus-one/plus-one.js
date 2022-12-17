/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let num = digits.join('');
    num = BigInt(num);
    num += 1n;
    num += '';
    return num.split('')
};