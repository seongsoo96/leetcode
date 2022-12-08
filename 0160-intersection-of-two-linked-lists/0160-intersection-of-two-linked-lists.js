/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
//Approach 1 : Brute Force 
// var getIntersectionNode = function(headA, headB) {
//     while(headA != null) {
//         let bHead = headB;
//         while(bHead != null) {
//             if(headA === bHead) {
//                 return headA
//             }
//             bHead = bHead.next;
//         }
//         headA = headA.next;
//     }
//     return null
// };

//Approach 2 : Two Pointers
var getIntersectionNode = function(headA, headB) {
    let pA = headA;
    let pB = headB;
    while(pA != pB) {
        pA = pA ? pA.next : headB
        pB = pB ? pB.next : headA
    }
    return pA;
};