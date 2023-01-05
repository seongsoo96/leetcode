/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let length = 0;
    let dummy = head;
    while(dummy) {
        length++;
        dummy = dummy.next
    }
    let half = Math.floor(length/2);
    
    while(half) {
        half--;
        head = head.next
    }
    return head
};