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
var getIntersectionNode = function(headA, headB) {
    while(headA != null) {
        let bHead = headB;
        while(bHead != null) {
            if(headA === bHead) {
                return headA
            }
            bHead = bHead.next;
        }
        headA = headA.next;
    }
    return null
};