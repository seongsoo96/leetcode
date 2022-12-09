/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const dummy = new ListNode(0);
    dummy.next = head;
    let length = 0;
    while(head !== null) {
        if(head == null) {
            break;
        }
        length++;
        head = head.next;
    }
    length -= n;
    let first = dummy;
    while(length > 0) {
        length--;
        first = first.next;
    }
    first.next = first.next.next;
    return dummy.next;
};