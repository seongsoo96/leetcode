/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    const set = new Set();
    let index = 0;
    while(head != null) {
        if(set.has(head)) {
            return head;
        }
        set.add(head);
        head = head.next;
        index++;
    }
    return head;
};