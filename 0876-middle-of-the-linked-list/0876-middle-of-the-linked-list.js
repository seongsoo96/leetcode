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
    let cnt = 0;
    let origin = head;
    while(head.next) {
        head = head.next;
        cnt++;
    }
    cnt = cnt%2 === 0 ? cnt/2 : (cnt+1)/2
    while(cnt) {
        origin = origin.next;
        cnt--;
    }
    return origin;
};