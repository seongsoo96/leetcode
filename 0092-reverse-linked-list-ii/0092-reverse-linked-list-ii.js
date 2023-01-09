/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if(!head) return head;
    
    let curr = head, prev = null;
    while(left > 1) {
        prev = curr;
        curr = curr.next;
        left--
        right--
    }
    let con = prev, tail = curr;
    let third = null;
    
    while(right > 0) {
        third = curr.next;
        curr.next = prev;
        prev = curr;
        curr = third;
        right--;
    }
    
    if(con) {
        con.next = prev;
    } else {
        head = prev;
    }
    
    tail.next = curr;
    return head;
};