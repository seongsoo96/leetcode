/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let arr = [];
    let curr = head;
    while(curr) {
        arr.push(curr.val);
        curr = curr.next;
    }
    let length = arr.length-1;
    let count = 0;
    while(length >= count && head) {
        if(arr[length] === head.val) {
            length--;
            head = head.next;
        } else {
            return false;
        }
    }
    return true
};