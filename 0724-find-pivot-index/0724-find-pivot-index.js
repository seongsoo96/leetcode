/**
 * @param {number[]} nums
 * @return {number}
 */

// My Solution
// var pivotIndex = function(nums) {
//     for(let i=0; i<nums.length; i++) {
//         let leftSum = 0;
//         let rightSum = 0;
//         for(let j=0; j<i; j++) {
//             leftSum += nums[j];
//         }
//         for(let k=i+1; k<nums.length; k++) {
//             rightSum += nums[k];
//         }
        
//         if(leftSum === rightSum) {
//             return i;
//         }
//     }
//     return -1;
// };

// Better Solution
var pivotIndex = function(nums) {
    let sum = 0
    let leftsum = 0;
    for (const x of nums) {
        sum += x;
    } 
    for (let i = 0; i < nums.length; i++) {
        if (leftsum === sum - leftsum - nums[i]) {
            return i;
        }
        leftsum += nums[i];
    }
    return -1;
};