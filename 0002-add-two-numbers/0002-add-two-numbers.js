/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let a = l1;
    let b = l2;
    let ten = 1;
    let sum = 0;
    while(a || b) {
        let aVal = a.val || 0;
        let bVal = b.val || 0
        sum = BigInt(sum) + BigInt(aVal + bVal) * BigInt(ten)
        ten =  BigInt(ten) * 10n;
        a = a.next || 0;
        b = b.next || 0;
    }
    sum = (sum+'').split('').reverse();
    let result = new ListNode();
    let hello = result;
    for(let i=0; i<sum.length; i++) {
        result.next = new ListNode(sum[i]);
        result = result.next;
    }
    return hello.next;
};