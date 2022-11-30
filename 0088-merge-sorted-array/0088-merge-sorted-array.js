/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// My solution
// var merge = function(nums1, m, nums2, n) {
//     if(nums1.length > m) {
//         while(nums1.length !== m) {
//             nums1.pop();
//         }
//     }
//     for(let i=0; i<n; i++) {
//         nums1.push(nums2[i]);
//     }
//     nums1.sort((a, b) => a-b);
// };

// Other solution
var merge = function (nums1, m, nums2, n) {
    var insertPos = m + n - 1;
    m--; n--;
    while (n >= 0) {
        nums1[insertPos--] = (nums1[m] > nums2[n]) ? nums1[m--] : nums2[n--];
    }
};
