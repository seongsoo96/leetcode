/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head || !k) return head
    let length = 0;
    let dummy = head;
    while(dummy) {
        length++;
        dummy = dummy.next;
    }
    if(length <= 1) return head;
    
    let rotate = head;
    let temp = rotate;
    let next = rotate.next;
    for(let i=0; i<length-1; i++) {
        rotate = rotate.next;
    }
    rotate.next = head;
    let curr = rotate.next; //1234512345
    let n = length - k%length;
    
    for(let i=0; i<n-1; i++) {
        curr = curr.next;
    }
    let nextTemp = curr.next;
    curr.next = null;
    return nextTemp
};